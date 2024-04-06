//-----------------------------------------------------------------------------
// Data model
//-----------------------------------------------------------------------------

class Section {
    public constructor(public id: string, public keywords: string[]) {
        let extendedKeywords = [];
        for (let keyword of keywords) {
            let hasMatched = false;
            for (let prefix of keywordPrefixes) {
                if (keyword.substr(0, prefix[1].length) === prefix[1]) {
                    for (let index = 2; index < prefix.length; index++) {
                        hasMatched = true;
                        extendedKeywords.push(
                            prefix[index] + keyword.substr(prefix[1].length)
                        );
                    }
                }
            }
            if (!hasMatched) {
                extendedKeywords.push(keyword);
            }
        }
        this.keywords = extendedKeywords;
    }
}

class TreeNode {
    public id: number;
    public name: string;
    public parent: TreeNode;
    public children: TreeNode[] = new Array();
    public visibleChildren: TreeNode[] = new Array();
    public visible: boolean;
    public file: string;
    public sections: Section[] = new Array();
    public isVisible: boolean = true;
    public isExpanded: boolean = false;
    public isLastVisibleChild: boolean = false;

    public constructor(name: string, parentTreeNode: TreeNode) {
        this.id = allTreeNodes.length;
        this.name = name;
        this.parent = parentTreeNode;
        this.visible = true;
        if (null != parentTreeNode) {
            parentTreeNode.children.push(this);
        }
        allTreeNodes.push(this);
        let cacheKey = this.name;
        while (null != parentTreeNode) {
            if (null != parentTreeNode.parent) {
                cacheKey = parentTreeNode.name + "/" + cacheKey;
            }
            parentTreeNode = parentTreeNode.parent;
        }
        treeNodeCache[cacheKey] = this;
        this.isExpanded = null == parentTreeNode || null == parentTreeNode.parent;
    }

    public updateVisibleChildren(): void {
        this.visibleChildren.length = 0;
        for (let index: number = 0; index < this.children.length; index++) {
            if (this.children[index].isVisible) {
                this.visibleChildren.push(this.children[index]);
                this.children[index].isLastVisibleChild = false;
                this.children[index].updateVisibleChildren();
            }
        }
        if (0 < this.visibleChildren.length) {
            this.visibleChildren[this.visibleChildren.length - 1].isLastVisibleChild = true;
        }
    }
}

let rootTreeNode: TreeNode = null;
let allTreeNodes: TreeNode[] = new Array();
let treeNodeCache: { [index: string]: TreeNode; } = {};

//-----------------------------------------------------------------------------
// Importing node metadata
//-----------------------------------------------------------------------------

function addNode(path: string[], file: string, sections: any[]) {
    let treeNode: TreeNode = new TreeNode(path[path.length - 1], getTreeNode(path, path.length - 1));
    treeNode.file = file;

    for (let index = 0; index < sections.length; index++) {
        let id: string = (<string[]>(sections[index]))[0];
        let keywords: string[] = <string[]>((<any[]>(sections[index]))[1]);
        treeNode.sections.push(new Section(id, keywords));
    }
}

function getTreeNode(path: string[], length: number): TreeNode {

    let cacheKey = path.slice(0).splice(0, length).join("/");
    if (null != treeNodeCache[cacheKey] && undefined != treeNodeCache[cacheKey]) {
        return <TreeNode>treeNodeCache[cacheKey];
    }

    if (0 == length) {
        if (null == rootTreeNode) {
            rootTreeNode = new TreeNode(null, null);
        }
        return rootTreeNode;
    } else if (null == rootTreeNode) {
        return rootTreeNode = new TreeNode(path[length - 1], getTreeNode(path, length - 1));
    } else {
        let currentTreeNode: TreeNode = rootTreeNode;
        for (let index = 0; index < length; index++) {
            let childMatched = false;
            for (let child = 0; child < currentTreeNode.children.length; child++) {
                if (path[index] == currentTreeNode.children[child].name) {
                    currentTreeNode = currentTreeNode.children[child];
                    childMatched = true;
                }
            }
            if (!childMatched) {
                return new TreeNode(path[index], getTreeNode(path, length - 1));
            }
        }
        return currentTreeNode;
    }
}

//-----------------------------------------------------------------------------
// Rendering the tree
//-----------------------------------------------------------------------------

var parameters: { [index: string]: string; } = null;

function initialiseTree() {

    for (let icon of ["document", "folder", "line-intermediate", "line-last", "line-skipped" /*, "minus", "plus"*/]) {
        let iconImage = new Image();
        iconImage.src = "images/" + icon + ".svg";
    }

    parameters = parseQueryString();

    if (0 != window.location.href.indexOf("http")) {
        var scriptElement = document.createElement("script");
        scriptElement.async = false;
        scriptElement.src = "js/content.js";
        scriptElement.type = "text/javascript";
        document.body.appendChild(scriptElement);
    }

    if (typeof parameters["query"] === "string") {
        document.getElementById('content').innerHTML = '';
        document.onreadystatechange = () => {
            if (document.readyState == "complete") {
                searchBox.value = parameters["query"];
                updateSuggestions();
                search();
            }
        };
    }

    allTreeNodes[0].updateVisibleChildren();

    for (let index: number = 0; index < allTreeNodes.length; index++) {
        allTreeNodes[index].isExpanded = null == allTreeNodes[index].parent
            || null == allTreeNodes[index].parent.parent;
    }
    updateSuggestions();

    document.onkeyup = (event: KeyboardEvent) => {
        if (event.keyCode == 27) {
            let searchBox = <HTMLInputElement>document.getElementById("searchBox");
            searchBox.value = "";
            if (searchBox == document.activeElement) {
                document.getElementById("dummyFocus").focus();
            }
            updateSuggestions();
        } else if (event.keyCode == 81 && event.ctrlKey) {
            var searchBox = <HTMLInputElement>document.getElementById("searchBox");
            searchBox.select();
            searchBox.focus();
            window.scrollTo(0, 0);
        }
    };

    let searchBox = <HTMLInputElement>document.getElementById("searchBox");
    if ("search" == parameters["mode"]) {
        hideTree();
        searchBox.placeholder = "Search";
        searchBox.focus();
    } else {
        showTree();
        document.getElementById("dummyFocus").focus();
    }
}

function parseQueryString(): { [index: string]: string; } {                       // parse the query string into an anonymous object (works like a hash table)
    var parameters: { [index: string]: string; } = {};
    var queryString = window.location.search.substr(1) || "";
    var items = queryString.split("&") || [];
    for (var i = 0; i < items.length; i++) {
        var parameter = items[i].split("=");
        var name = decodeURIComponent(parameter[0]).trim();
        var value = decodeURIComponent(parameter[1] || "").trim();
        if (0 < name.length) {
            parameters[name] = value;
        }
    }
    return parameters;
}

function updateTree(): void {
    let html = "";
    if (null != rootTreeNode && 0 <= rootTreeNode.visibleChildren.length) {
        html = "<table class='tree'>" + renderTree(rootTreeNode) + "</table>";
    }
    document.getElementById("tree").innerHTML = html;
}

function renderTree(currentTreeNode: TreeNode): string {

    let html: string = "";
    if (null != currentTreeNode.parent) {

        let row: string = "";
        if (0 < currentTreeNode.visibleChildren.length) {
            row = "<td class='indent icon'><img class='icon' src='images/folder.svg'></td>";
        } else {
            row = "<td class='indent icon'><img class='icon' src='images/document.svg'></td>";
        }

        if (currentTreeNode.isLastVisibleChild) {
            row = "<td class='indent last'></td>" + row;
        } else {
            row = "<td class='indent intermediate'></td>" + row;
        }

        let columnCount = 2;
        for (let tempTreeNode: TreeNode = currentTreeNode.parent;
            tempTreeNode.parent != null;
            tempTreeNode = tempTreeNode.parent) {
            if (tempTreeNode.isLastVisibleChild) {
                row = "<td class='indent blank'></td>" + row;
            } else {
                row = "<td class='indent skipped'></td>" + row;
            }
            columnCount++;
        }

        let label: string = currentTreeNode.name;
        if (0 < currentTreeNode.visibleChildren.length) {
            label = "<a href='javascript:toggle(" + currentTreeNode.id + ")'>" + currentTreeNode.name + "</a>";
        } else if (null != currentTreeNode.file) {
            label = "<a href='javascript:loadFile(" + currentTreeNode.id + ")'>" + currentTreeNode.name + "</a>";
        }
        let cssClass = (currentTreeNode == currentlyDisplayedTreeNode ? " selected" : "");
        row += "<td class='label " + cssClass + "' colspan='" + (10 - columnCount) + "'><div class='" + cssClass + "'>" + label + "</div></td>";
        html += "<tr>" + row + "</tr>";
    }

    if (currentTreeNode.isExpanded) {
        for (let index: number = 0; index < currentTreeNode.visibleChildren.length; index++) {
            html += renderTree(currentTreeNode.visibleChildren[index]);
        }
    }

    return html;
}

var currentlyDisplayedTreeNode: TreeNode = null;

//-----------------------------------------------------------------------------
// Tree manipulation
//-----------------------------------------------------------------------------

function toggle(id: number) {
    allTreeNodes[id].isExpanded = !allTreeNodes[id].isExpanded;
    updateTree();
}

var treeIsVisible: boolean = true;

function showOrHideTree() {
    if (treeIsVisible) {
        hideTree();
    } else {
        showTree();
    }
    treeIsVisible = !treeIsVisible;
}

function showTree() {
    toggleTree("table-cell", "&#9668&nbsp;");
}

function hideTree() {
    toggleTree("none", "&#9658;");
}

function toggleTree(display: string, icon: string) {
    document.getElementById("tree").style.display = display;
    document.getElementById("showOrHideTree").innerHTML = icon;
}

//-----------------------------------------------------------------------------
// Loading files
//-----------------------------------------------------------------------------

let fileCache: { [index: string]: string; } = {};

function addFile(file: string, content: string) {
    fileCache[file] = content;
}

function getFileContent(file: string) {
    if (fileCache[file] == undefined || fileCache[file] == null) {
        return null;
    } else {
        return fileCache[file];
    }
}

function loadFile(id: number) {

    let content: string = getFileContent(allTreeNodes[id].file);
    currentlyDisplayedTreeNode = allTreeNodes[id];
    updateTree();

    if (null != content) {

        document.getElementById("content").innerHTML = content;
        highlightSearch(id);

    } else {

        document.getElementById("content").innerHTML = document.getElementById("loadingIndicator").innerHTML;

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function onReadyStateChange() {
            if (xhr.readyState == 4) {
                if ((200 <= xhr.status
                    && xhr.status < 300)
                    || 304 == xhr.status) {
                    document.getElementById("content").innerHTML = xhr.responseText;
                    highlightSearch(id);
                }
            }
        };

        xhr.open("get", allTreeNodes[id].file, true);
        xhr.send(null);
    }
}
