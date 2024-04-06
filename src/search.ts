//-----------------------------------------------------------------------------
// Prefixes
//-----------------------------------------------------------------------------

var keywordPrefixes: string[][] = [
    ['Angular 1', 'ng1', 'ng1', 'angular1'],
    ['Angular 2', 'ng2', 'ng2', 'angular2'],
    ['Apex / Salesforce', 'apex', 'apex', 'sfdc', 'salesforce'],
    ['ASP.NET MVC', 'mvc', 'mvc', 'aspmvc'],
    ['ASP.NET WebForms', 'asp', 'asp'],
    ['Bootstrap', 'bs', 'bs', 'bootstrap'],
    ['C#.NET', 'cs', 'cs', 'c#', 'csharp'],
    ['CSS', 'css', 'css'],
    ['Enzyme', 'enzyme', 'enzyme'],
    ['GAWK', 'gawk', 'gawk', 'awk'],
    ['Git', 'git', 'git'],
    ['Gradle', 'gradle', 'gradle'],
    ['HTML', 'html', 'html'],
    ['Java', 'java', 'java'],
    ['jOOQ', 'jooq', 'jooq'],
    ['JavaScript', 'js', 'js', 'javascript'],
    ['jQuery', 'jq', 'jq', 'jquery'],
    ['Less', 'less', 'less'],
    ['Lombok', 'lobmok', 'lombok'],
    ['MongoDB', 'mg', 'mg', 'mongo', 'mongodb'],
    ['Node + Express', 'node', 'node'],
    ['React', 'ra', 'ra', 'react'],
    ['Redis', 'rd', 'redis'],
    ['Redux', 'redux', 'redux'],
    ['Ruby', 'rb', 'rb', 'ruby'],
    ['Sass', 'sass', 'sass'],
    ['Scala', 'sc', 'sc', 'scala'],
    ['SOY / Closure', 'soy', 'soy', 'closure'],
    ['Spring Boot', 'spring', 'spring', 'springboot'],
    ['SQL-Server', 'ss', 'ss', 'sqlserver', 'mssql', 'sql'],
    ['TypeScript', 'ts', 'ts', 'typescript'],
    ['VB.NET', 'vb', 'vb', 'visualbasic'],
    ['XML + XLink', 'xml', 'xml'],
    ['XPath + XPointer', 'xp', 'xp', 'xpath', 'xpointer'],
    ['XSLT', 'xslt', 'xslt'],
];

//-----------------------------------------------------------------------------
// Awesomplete suggestion box
//-----------------------------------------------------------------------------

declare class Awesomplete {
    public constructor(input: any, options: any);
    public list: string[][];
}

var awesomplete: Awesomplete = null;

function initialiseAwesomplete() {
    if (null == awesomplete) {
        awesomplete = new Awesomplete(
            document.getElementById("searchBox"),
            {
                minChars: 0,
                maxItems: 100,
                autoFirst: false,
                sort: (a: any, b: any) => { return 0; },
                item: (suggestion: any, input: any) => {
                    let element = document.createElement("li");
                    element.innerHTML = suggestion;
                    return element;
                },
                filter: (text: string, input: string): boolean => {
                    return true;
                }
            }
        );
        document.body.addEventListener("awesomplete-select", (event: any) => {
            setTimeout(() => { search(); }, 100);
        });
    }
}

function updateAwesomplete(suggestions: string[][], showAll: boolean = false): void {

    initialiseAwesomplete();

    let list: string[][] = new Array();
    if (null != suggestions) {
        for (let index = 0; index < suggestions.length; index++) {
            list[index] = [suggestions[index][1], suggestions[index][0]];
        }
    }

    let allUl = document.getElementsByTagName("ul");
    let awesompleteUl: HTMLElement = null;
    for (let index = allUl.length - 1; 0 <= index; index--) {
        if (allUl[index].parentElement.className.toLowerCase() == "awesomplete") {
            awesompleteUl = <HTMLElement>allUl[index];
            break;
        }
    }

    if (null != awesompleteUl) {
        if (!showAll) {
            awesompleteUl.style.maxHeight = "25em";
        } else {
            awesompleteUl.style.maxHeight = null;
        }
    } else {
        if (!showAll && 10 < list.length) {
            list = list.splice(0, 10);
        }
    }

    awesomplete.list = list;
}

//-----------------------------------------------------------------------------
// Data analysis
//-----------------------------------------------------------------------------

function getMatchingTreeNodes(searchTerms: string[], prefix: string = null) {
    let matchingTreeNodes: TreeNode[] = new Array();
    for (let index = 0; index < allTreeNodes.length; index++) {
        if (matchesTreeNode(allTreeNodes[index], searchTerms, prefix)) {
            matchingTreeNodes.push(allTreeNodes[index]);
        }
    }
    return matchingTreeNodes;
}

function matchesTreeNode(treeNode: TreeNode, searchTerms: string[], prefix: string = null) {
    for (let index = 0; index < treeNode.sections.length; index++) {
        if (matchesSection(treeNode.sections[index], searchTerms, prefix)) {
            return true;
        }
    }
    return false;
}

function getMatchingSections(treeNode: TreeNode, searchTerms: string[], prefix: string = null) {
    let matchingSections: Section[] = new Array();
    for (let index = 0; index < treeNode.sections.length; index++) {
        if (matchesSection(treeNode.sections[index], searchTerms, prefix)) {
            matchingSections.push(treeNode.sections[index]);
        }
    }
    return matchingSections;
}

function matchesSection(section: Section, searchTerms: string[], prefix: string = null) {
    for (let index = 0; index < section.keywords.length; index++) {
        if (matchesKeyword(section.keywords[index], searchTerms, prefix)) {
            return true;
        }
    }
    return false;
}

function getMatchingKeywords(searchTerms: string[], prefix: string = null): string[] {
    let matchingKeywords: string[] = new Array();
    for (let node = 0; node < allTreeNodes.length; node++) {
        for (let section = 0; section < allTreeNodes[node].sections.length; section++) {
            for (let keyword = 0; keyword < allTreeNodes[node].sections[section].keywords.length; keyword++) {
                if (matchesKeyword(allTreeNodes[node].sections[section].keywords[keyword], searchTerms, prefix)) {
                    matchingKeywords.push(allTreeNodes[node].sections[section].keywords[keyword]);
                }
            }
        }
    }
    return matchingKeywords;
}

function matchesKeyword(keyword: string, searchTerms: string[], prefix: string = null): boolean {
    if (null != prefix && 0 != keyword.indexOf(prefix)) {
        return false;
    }
    for (let index = 0; index < searchTerms.length; index++) {
        if (keyword.indexOf(searchTerms[index]) < 0) {
            return false;
        }
    }
    return true;
}

function getPrefix(searchTerms: string[]): string {
    let currentPrefix = null;
    if (1 <= searchTerms.length) {
        for (let prefix of keywordPrefixes) {
            for (let index = 2; index < prefix.length; index++) {
                if (searchTerms[0].substr(0, prefix[index].length) === prefix[index]) {
                    if (null === currentPrefix || currentPrefix.length < prefix[index].length) {
                        currentPrefix = prefix[index];
                    }
                }
            }
        }
    }
    return currentPrefix;
}

function getSearchTerms(): string[] {
    let result: string[] = (<HTMLInputElement>document.getElementById("searchBox"))
        .value.trim().toLowerCase().split(/[ \t]+/);
    if (1 == result.length && 0 == result[0].length) {
        result.length = 0;
    }
    return result;
}

//-----------------------------------------------------------------------------
// Show suggestions
//-----------------------------------------------------------------------------

function updateSuggestions() {

    let searchTerms: string[] = getSearchTerms();
    let showAll: boolean = false;
    let autoload: boolean = false;

    if (0 == searchTerms.length) {
        resetTree();
        updateAwesomplete(null);
    }

    document.getElementById("searchBox").className = "";

    let suggestions: string[][] = new Array();

    if (searchTerms.length <= 1) {
        let hasFullMatch = false;
        for (let prefix of keywordPrefixes) {
            let isMatchingPrefix = false;
            let prefixes = "";
            for (let index = 2; index < prefix.length; index++) {
                if (0 === searchTerms.length || prefix[index].substr(0, searchTerms[0].length) === searchTerms[0]) {
                    isMatchingPrefix = true;
                    if (0 < searchTerms.length && prefix[index].length <= searchTerms[0].length) {
                        hasFullMatch = true;
                    }
                }
                if (2 < index) {
                    prefixes += ', ';
                }
                prefixes += highlightSearchTerms(prefix[index], searchTerms)
            }
            if (isMatchingPrefix) {
                suggestions.push([
                    prefix[0],
                    "<span style='width:10em;display:inline-block;'>"
                    + prefix[0]
                    + "</span>"
                    + prefixes
                ]);
            }
        }
        if (suggestions.length == 1 || hasFullMatch) {
            suggestions.length = 0;
        }
    }

    let prefix = getPrefix(searchTerms);

    if (0 == suggestions.length) {
        if (0 < searchTerms.length) {
            let matchingKeywords: string[] = getMatchingKeywords(searchTerms, prefix);
            for (let index = 0; index < matchingKeywords.length; index++) {
                suggestions.push([
                    matchingKeywords[index],
                    highlightSearchTerms(matchingKeywords[index], searchTerms)
                ]);
            }
            suggestions.sort((item1: string[], item2: string[]) => {
                if (item1[1] < item2[1]) return -1;
                else if (item1[1] == item2[1]) return 0;
                else return 1;
            });
        }
    } else {
        showAll = true;
    }

    if (!showAll) {
        let matchCount = getMatchingTreeNodes(searchTerms, prefix).length;
        let cssClass = "";
        if (1 == matchCount) cssClass = "uniqueMatch";
        if (0 == matchCount) cssClass = "noMatch";
        document.getElementById("searchBox").className = cssClass;
        updateAwesomplete(null, showAll);
    }
    updateAwesomplete(suggestions, showAll);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => { filterTree(false); }, 200);
}

let timeoutId: number = -1;


function highlightSearchTerms(text: string, searchTerms: string[]): string {
    let isMatch: boolean[] = new Array();
    for (let index = 0; index < text.length; index++) {
        isMatch[index] = false;
    }
    for (let index = 0; index < searchTerms.length; index++) {
        let position: number = 0;
        while (0 <= (position = text.indexOf(searchTerms[index], position))) {
            for (let m = 0; m < searchTerms[index].length; m++) {
                isMatch[position + m] = true;
            }
            position += searchTerms[index].length;
        }
    }
    let result: string = "";
    for (let index = 0; index < text.length; index++) {
        if (isMatch[index] && (0 == index || !isMatch[index - 1])) {
            result += "<span class='keywordMatchHighlight'>";
        } else if (!isMatch[index] && 0 < index && isMatch[index - 1]) {
            result += "</span>";
        }
        result += text.charAt(index);
        if (index + 1 == text.length && isMatch[text.length - 1]) {
            result += "</span>";
        }
    }
    return result;
}

//-----------------------------------------------------------------------------
// Filter the tree
//-----------------------------------------------------------------------------

var expandedStateBeforeSearch: boolean[] = null;

function filterTree(force: boolean) {

    let searchTerms: string[] = getSearchTerms();
    let matchingTreeNodes: TreeNode[] = getMatchingTreeNodes(searchTerms, getPrefix(searchTerms));

    if (0 == searchTerms.length || (30 < matchingTreeNodes.length && !force)) {
        resetTree();
        return;
    }

    if (null == expandedStateBeforeSearch) {
        expandedStateBeforeSearch = new Array();
        for (let index = 0; index < allTreeNodes.length; index++) {
            expandedStateBeforeSearch[index] = allTreeNodes[index].isExpanded;
        }
    }

    for (let index = 0; index < allTreeNodes.length; index++) {
        allTreeNodes[index].isVisible = false;
        allTreeNodes[index].isExpanded = true;
    }

    for (let index = 0; index < matchingTreeNodes.length; index++) {
        let currentTreeNode = matchingTreeNodes[index];
        while (currentTreeNode) {
            currentTreeNode.isVisible = true;
            currentTreeNode.isExpanded = true;
            currentTreeNode = currentTreeNode.parent;
        }
    }
    rootTreeNode.updateVisibleChildren();
    updateTree();
}

function resetTree() {
    if (null != expandedStateBeforeSearch) {
        for (let index = 0; index < allTreeNodes.length; index++) {
            allTreeNodes[index].isExpanded = expandedStateBeforeSearch[index];
        }
        expandedStateBeforeSearch = null;
        if (null != currentlyDisplayedTreeNode) {
            let currentTreeNode = currentlyDisplayedTreeNode.parent;
            while (null != currentTreeNode) {
                currentTreeNode.isExpanded = true;
                currentTreeNode = currentTreeNode.parent;
            }
        }
    }
    for (let index = 0; index < allTreeNodes.length; index++) {
        allTreeNodes[index].isVisible = true;
    }
    rootTreeNode.updateVisibleChildren();
    updateTree();
}

//-----------------------------------------------------------------------------
// Search
//-----------------------------------------------------------------------------

var mustScrollAfterLoad: boolean = false;

function search() {
    filterTree(true);
    updateTree();
    let matchingNodeCount = 0;
    let nodeToLoad: TreeNode = null;
    for (let index = 0; index < allTreeNodes.length; index++) {
        if (allTreeNodes[index].isVisible && 0 == allTreeNodes[index].children.length) {
            matchingNodeCount++;
            if (1 == matchingNodeCount) {
                document.getElementById("dummyFocus").focus();
                mustScrollAfterLoad = true;
                nodeToLoad = allTreeNodes[index];
            } else if (2 == matchingNodeCount) {
                mustScrollAfterLoad = false;
                showTree();
            }
        }
    }
    if (null != nodeToLoad) {
        loadFile(nodeToLoad.id);
    }
    return false;
}

//-----------------------------------------------------------------------------
// Highlight the sections that matched the search
//-----------------------------------------------------------------------------

function highlightSearch(id: number): void {

    let searchTerms = getSearchTerms();
    let prefix = getPrefix(searchTerms);
    let matchedSections: string[] = new Array();
    let unmatchedSections: string[] = new Array();

    for (let index = 0; index < currentlyDisplayedTreeNode.sections.length; index++) {
        if (0 == searchTerms.length || !matchesSection(currentlyDisplayedTreeNode.sections[index], searchTerms, prefix)) {
            unmatchedSections.push(currentlyDisplayedTreeNode.sections[index].id);
        } else {
            matchedSections.push(currentlyDisplayedTreeNode.sections[index].id);
        }
    }

    for (let index = 0; index < unmatchedSections.length; index++) {
        document.getElementById(unmatchedSections[index]).className = "unmatchedSection";
    }
    for (let index = 0; index < matchedSections.length; index++) {
        document.getElementById(matchedSections[index]).className = "matchedSection";
    }

    if (mustScrollAfterLoad) {
        if (0 < matchedSections.length) {
            document.getElementById(matchedSections[0]).scrollIntoView();
            window.scrollTo(window.scrollX, window.scrollY - 20);
        } else {
            window.scrollTo(0, 0);
        }
    }
    mustScrollAfterLoad = false;
}
