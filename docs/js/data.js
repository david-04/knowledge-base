var Section = (function () {
    function Section(id, keywords) {
        this.id = id;
        this.keywords = keywords;
        var extendedKeywords = [];
        for (var _i = 0, keywords_1 = keywords; _i < keywords_1.length; _i++) {
            var keyword = keywords_1[_i];
            var hasMatched = false;
            for (var _a = 0, keywordPrefixes_1 = keywordPrefixes; _a < keywordPrefixes_1.length; _a++) {
                var prefix = keywordPrefixes_1[_a];
                if (keyword.substr(0, prefix[1].length) === prefix[1]) {
                    for (var index = 2; index < prefix.length; index++) {
                        hasMatched = true;
                        extendedKeywords.push(prefix[index] + keyword.substr(prefix[1].length));
                    }
                }
            }
            if (!hasMatched) {
                extendedKeywords.push(keyword);
            }
        }
        this.keywords = extendedKeywords;
    }
    return Section;
}());
var TreeNode = (function () {
    function TreeNode(name, parentTreeNode) {
        this.children = new Array();
        this.visibleChildren = new Array();
        this.sections = new Array();
        this.isVisible = true;
        this.isExpanded = false;
        this.isLastVisibleChild = false;
        this.id = allTreeNodes.length;
        this.name = name;
        this.parent = parentTreeNode;
        this.visible = true;
        if (null != parentTreeNode) {
            parentTreeNode.children.push(this);
        }
        allTreeNodes.push(this);
        var cacheKey = this.name;
        while (null != parentTreeNode) {
            if (null != parentTreeNode.parent) {
                cacheKey = parentTreeNode.name + "/" + cacheKey;
            }
            parentTreeNode = parentTreeNode.parent;
        }
        treeNodeCache[cacheKey] = this;
        this.isExpanded = null == parentTreeNode || null == parentTreeNode.parent;
    }
    TreeNode.prototype.updateVisibleChildren = function () {
        this.visibleChildren.length = 0;
        for (var index = 0; index < this.children.length; index++) {
            if (this.children[index].isVisible) {
                this.visibleChildren.push(this.children[index]);
                this.children[index].isLastVisibleChild = false;
                this.children[index].updateVisibleChildren();
            }
        }
        if (0 < this.visibleChildren.length) {
            this.visibleChildren[this.visibleChildren.length - 1].isLastVisibleChild = true;
        }
    };
    return TreeNode;
}());
var rootTreeNode = null;
var allTreeNodes = new Array();
var treeNodeCache = {};
function addNode(path, file, sections) {
    var treeNode = new TreeNode(path[path.length - 1], getTreeNode(path, path.length - 1));
    treeNode.file = file;
    for (var index = 0; index < sections.length; index++) {
        var id = (sections[index])[0];
        var keywords = ((sections[index])[1]);
        treeNode.sections.push(new Section(id, keywords));
    }
}
function getTreeNode(path, length) {
    var cacheKey = path.slice(0).splice(0, length).join("/");
    if (null != treeNodeCache[cacheKey] && undefined != treeNodeCache[cacheKey]) {
        return treeNodeCache[cacheKey];
    }
    if (0 == length) {
        if (null == rootTreeNode) {
            rootTreeNode = new TreeNode(null, null);
        }
        return rootTreeNode;
    }
    else if (null == rootTreeNode) {
        return rootTreeNode = new TreeNode(path[length - 1], getTreeNode(path, length - 1));
    }
    else {
        var currentTreeNode = rootTreeNode;
        for (var index = 0; index < length; index++) {
            var childMatched = false;
            for (var child = 0; child < currentTreeNode.children.length; child++) {
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
var parameters = null;
function initialiseTree() {
    for (var _i = 0, _a = ["document", "folder", "line-intermediate", "line-last", "line-skipped"]; _i < _a.length; _i++) {
        var icon = _a[_i];
        var iconImage = new Image();
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
        document.onreadystatechange = function () {
            if (document.readyState == "complete") {
                searchBox.value = parameters["query"];
                updateSuggestions();
                search();
            }
        };
    }
    allTreeNodes[0].updateVisibleChildren();
    for (var index = 0; index < allTreeNodes.length; index++) {
        allTreeNodes[index].isExpanded = null == allTreeNodes[index].parent
            || null == allTreeNodes[index].parent.parent;
    }
    updateSuggestions();
    document.onkeyup = function (event) {
        if (event.keyCode == 27) {
            var searchBox_1 = document.getElementById("searchBox");
            searchBox_1.value = "";
            if (searchBox_1 == document.activeElement) {
                document.getElementById("dummyFocus").focus();
            }
            updateSuggestions();
        }
        else if (event.keyCode == 81 && event.ctrlKey) {
            var searchBox = document.getElementById("searchBox");
            searchBox.select();
            searchBox.focus();
            window.scrollTo(0, 0);
        }
    };
    var searchBox = document.getElementById("searchBox");
    if ("search" == parameters["mode"]) {
        hideTree();
        searchBox.placeholder = "Search";
        searchBox.focus();
    }
    else {
        showTree();
        document.getElementById("dummyFocus").focus();
    }
}
function parseQueryString() {
    var parameters = {};
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
function updateTree() {
    var html = "";
    if (null != rootTreeNode && 0 <= rootTreeNode.visibleChildren.length) {
        html = "<table class='tree'>" + renderTree(rootTreeNode) + "</table>";
    }
    document.getElementById("tree").innerHTML = html;
}
function renderTree(currentTreeNode) {
    var html = "";
    if (null != currentTreeNode.parent) {
        var row = "";
        if (0 < currentTreeNode.visibleChildren.length) {
            row = "<td class='indent icon'><img class='icon' src='images/folder.svg'></td>";
        }
        else {
            row = "<td class='indent icon'><img class='icon' src='images/document.svg'></td>";
        }
        if (currentTreeNode.isLastVisibleChild) {
            row = "<td class='indent last'></td>" + row;
        }
        else {
            row = "<td class='indent intermediate'></td>" + row;
        }
        var columnCount = 2;
        for (var tempTreeNode = currentTreeNode.parent; tempTreeNode.parent != null; tempTreeNode = tempTreeNode.parent) {
            if (tempTreeNode.isLastVisibleChild) {
                row = "<td class='indent blank'></td>" + row;
            }
            else {
                row = "<td class='indent skipped'></td>" + row;
            }
            columnCount++;
        }
        var label = currentTreeNode.name;
        if (0 < currentTreeNode.visibleChildren.length) {
            label = "<a href='javascript:toggle(" + currentTreeNode.id + ")'>" + currentTreeNode.name + "</a>";
        }
        else if (null != currentTreeNode.file) {
            label = "<a href='javascript:loadFile(" + currentTreeNode.id + ")'>" + currentTreeNode.name + "</a>";
        }
        var cssClass = (currentTreeNode == currentlyDisplayedTreeNode ? " selected" : "");
        row += "<td class='label " + cssClass + "' colspan='" + (10 - columnCount) + "'><div class='" + cssClass + "'>" + label + "</div></td>";
        html += "<tr>" + row + "</tr>";
    }
    if (currentTreeNode.isExpanded) {
        for (var index = 0; index < currentTreeNode.visibleChildren.length; index++) {
            html += renderTree(currentTreeNode.visibleChildren[index]);
        }
    }
    return html;
}
var currentlyDisplayedTreeNode = null;
function toggle(id) {
    allTreeNodes[id].isExpanded = !allTreeNodes[id].isExpanded;
    updateTree();
}
var treeIsVisible = true;
function showOrHideTree() {
    if (treeIsVisible) {
        hideTree();
    }
    else {
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
function toggleTree(display, icon) {
    document.getElementById("tree").style.display = display;
    document.getElementById("showOrHideTree").innerHTML = icon;
}
var fileCache = {};
function addFile(file, content) {
    fileCache[file] = content;
}
function getFileContent(file) {
    if (fileCache[file] == undefined || fileCache[file] == null) {
        return null;
    }
    else {
        return fileCache[file];
    }
}
function loadFile(id) {
    var content = getFileContent(allTreeNodes[id].file);
    currentlyDisplayedTreeNode = allTreeNodes[id];
    updateTree();
    if (null != content) {
        document.getElementById("content").innerHTML = content;
        highlightSearch(id);
    }
    else {
        document.getElementById("content").innerHTML = document.getElementById("loadingIndicator").innerHTML;
        var xhr_1 = new XMLHttpRequest();
        xhr_1.onreadystatechange = function onReadyStateChange() {
            if (xhr_1.readyState == 4) {
                if ((200 <= xhr_1.status
                    && xhr_1.status < 300)
                    || 304 == xhr_1.status) {
                    document.getElementById("content").innerHTML = xhr_1.responseText;
                    highlightSearch(id);
                }
            }
        };
        xhr_1.open("get", allTreeNodes[id].file, true);
        xhr_1.send(null);
    }
}
