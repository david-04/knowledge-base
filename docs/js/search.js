var keywordPrefixes = [
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
var awesomplete = null;
function initialiseAwesomplete() {
    if (null == awesomplete) {
        awesomplete = new Awesomplete(document.getElementById("searchBox"), {
            minChars: 0,
            maxItems: 100,
            autoFirst: false,
            sort: function (a, b) { return 0; },
            item: function (suggestion, input) {
                var element = document.createElement("li");
                element.innerHTML = suggestion;
                return element;
            },
            filter: function (text, input) {
                return true;
            }
        });
        document.body.addEventListener("awesomplete-select", function (event) {
            setTimeout(function () { search(); }, 100);
        });
    }
}
function updateAwesomplete(suggestions, showAll) {
    if (showAll === void 0) { showAll = false; }
    initialiseAwesomplete();
    var list = new Array();
    if (null != suggestions) {
        for (var index = 0; index < suggestions.length; index++) {
            list[index] = [suggestions[index][1], suggestions[index][0]];
        }
    }
    var allUl = document.getElementsByTagName("ul");
    var awesompleteUl = null;
    for (var index = allUl.length - 1; 0 <= index; index--) {
        if (allUl[index].parentElement.className.toLowerCase() == "awesomplete") {
            awesompleteUl = allUl[index];
            break;
        }
    }
    if (null != awesompleteUl) {
        if (!showAll) {
            awesompleteUl.style.maxHeight = "25em";
        }
        else {
            awesompleteUl.style.maxHeight = null;
        }
    }
    else {
        if (!showAll && 10 < list.length) {
            list = list.splice(0, 10);
        }
    }
    awesomplete.list = list;
}
function getMatchingTreeNodes(searchTerms, prefix) {
    if (prefix === void 0) { prefix = null; }
    var matchingTreeNodes = new Array();
    for (var index = 0; index < allTreeNodes.length; index++) {
        if (matchesTreeNode(allTreeNodes[index], searchTerms, prefix)) {
            matchingTreeNodes.push(allTreeNodes[index]);
        }
    }
    return matchingTreeNodes;
}
function matchesTreeNode(treeNode, searchTerms, prefix) {
    if (prefix === void 0) { prefix = null; }
    for (var index = 0; index < treeNode.sections.length; index++) {
        if (matchesSection(treeNode.sections[index], searchTerms, prefix)) {
            return true;
        }
    }
    return false;
}
function getMatchingSections(treeNode, searchTerms, prefix) {
    if (prefix === void 0) { prefix = null; }
    var matchingSections = new Array();
    for (var index = 0; index < treeNode.sections.length; index++) {
        if (matchesSection(treeNode.sections[index], searchTerms, prefix)) {
            matchingSections.push(treeNode.sections[index]);
        }
    }
    return matchingSections;
}
function matchesSection(section, searchTerms, prefix) {
    if (prefix === void 0) { prefix = null; }
    for (var index = 0; index < section.keywords.length; index++) {
        if (matchesKeyword(section.keywords[index], searchTerms, prefix)) {
            return true;
        }
    }
    return false;
}
function getMatchingKeywords(searchTerms, prefix) {
    if (prefix === void 0) { prefix = null; }
    var matchingKeywords = new Array();
    for (var node = 0; node < allTreeNodes.length; node++) {
        for (var section = 0; section < allTreeNodes[node].sections.length; section++) {
            for (var keyword = 0; keyword < allTreeNodes[node].sections[section].keywords.length; keyword++) {
                if (matchesKeyword(allTreeNodes[node].sections[section].keywords[keyword], searchTerms, prefix)) {
                    matchingKeywords.push(allTreeNodes[node].sections[section].keywords[keyword]);
                }
            }
        }
    }
    return matchingKeywords;
}
function matchesKeyword(keyword, searchTerms, prefix) {
    if (prefix === void 0) { prefix = null; }
    if (null != prefix && 0 != keyword.indexOf(prefix)) {
        return false;
    }
    for (var index = 0; index < searchTerms.length; index++) {
        if (keyword.indexOf(searchTerms[index]) < 0) {
            return false;
        }
    }
    return true;
}
function getPrefix(searchTerms) {
    var currentPrefix = null;
    if (1 <= searchTerms.length) {
        for (var _i = 0, keywordPrefixes_1 = keywordPrefixes; _i < keywordPrefixes_1.length; _i++) {
            var prefix = keywordPrefixes_1[_i];
            for (var index = 2; index < prefix.length; index++) {
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
function getSearchTerms() {
    var result = document.getElementById("searchBox")
        .value.trim().toLowerCase().split(/[ \t]+/);
    if (1 == result.length && 0 == result[0].length) {
        result.length = 0;
    }
    return result;
}
function updateSuggestions() {
    var searchTerms = getSearchTerms();
    var showAll = false;
    var autoload = false;
    if (0 == searchTerms.length) {
        resetTree();
        updateAwesomplete(null);
    }
    document.getElementById("searchBox").className = "";
    var suggestions = new Array();
    if (searchTerms.length <= 1) {
        var hasFullMatch = false;
        for (var _i = 0, keywordPrefixes_2 = keywordPrefixes; _i < keywordPrefixes_2.length; _i++) {
            var prefix_1 = keywordPrefixes_2[_i];
            var isMatchingPrefix = false;
            var prefixes = "";
            for (var index = 2; index < prefix_1.length; index++) {
                if (0 === searchTerms.length || prefix_1[index].substr(0, searchTerms[0].length) === searchTerms[0]) {
                    isMatchingPrefix = true;
                    if (0 < searchTerms.length && prefix_1[index].length <= searchTerms[0].length) {
                        hasFullMatch = true;
                    }
                }
                if (2 < index) {
                    prefixes += ', ';
                }
                prefixes += highlightSearchTerms(prefix_1[index], searchTerms);
            }
            if (isMatchingPrefix) {
                suggestions.push([
                    prefix_1[0],
                    "<span style='width:10em;display:inline-block;'>"
                        + prefix_1[0]
                        + "</span>"
                        + prefixes
                ]);
            }
        }
        if (suggestions.length == 1 || hasFullMatch) {
            suggestions.length = 0;
        }
    }
    var prefix = getPrefix(searchTerms);
    if (0 == suggestions.length) {
        if (0 < searchTerms.length) {
            var matchingKeywords = getMatchingKeywords(searchTerms, prefix);
            for (var index = 0; index < matchingKeywords.length; index++) {
                suggestions.push([
                    matchingKeywords[index],
                    highlightSearchTerms(matchingKeywords[index], searchTerms)
                ]);
            }
            suggestions.sort(function (item1, item2) {
                if (item1[1] < item2[1])
                    return -1;
                else if (item1[1] == item2[1])
                    return 0;
                else
                    return 1;
            });
        }
    }
    else {
        showAll = true;
    }
    if (!showAll) {
        var matchCount = getMatchingTreeNodes(searchTerms, prefix).length;
        var cssClass = "";
        if (1 == matchCount)
            cssClass = "uniqueMatch";
        if (0 == matchCount)
            cssClass = "noMatch";
        document.getElementById("searchBox").className = cssClass;
        updateAwesomplete(null, showAll);
    }
    updateAwesomplete(suggestions, showAll);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () { filterTree(false); }, 200);
}
var timeoutId = -1;
function highlightSearchTerms(text, searchTerms) {
    var isMatch = new Array();
    for (var index = 0; index < text.length; index++) {
        isMatch[index] = false;
    }
    for (var index = 0; index < searchTerms.length; index++) {
        var position = 0;
        while (0 <= (position = text.indexOf(searchTerms[index], position))) {
            for (var m = 0; m < searchTerms[index].length; m++) {
                isMatch[position + m] = true;
            }
            position += searchTerms[index].length;
        }
    }
    var result = "";
    for (var index = 0; index < text.length; index++) {
        if (isMatch[index] && (0 == index || !isMatch[index - 1])) {
            result += "<span class='keywordMatchHighlight'>";
        }
        else if (!isMatch[index] && 0 < index && isMatch[index - 1]) {
            result += "</span>";
        }
        result += text.charAt(index);
        if (index + 1 == text.length && isMatch[text.length - 1]) {
            result += "</span>";
        }
    }
    return result;
}
var expandedStateBeforeSearch = null;
function filterTree(force) {
    var searchTerms = getSearchTerms();
    var matchingTreeNodes = getMatchingTreeNodes(searchTerms, getPrefix(searchTerms));
    if (0 == searchTerms.length || (30 < matchingTreeNodes.length && !force)) {
        resetTree();
        return;
    }
    if (null == expandedStateBeforeSearch) {
        expandedStateBeforeSearch = new Array();
        for (var index = 0; index < allTreeNodes.length; index++) {
            expandedStateBeforeSearch[index] = allTreeNodes[index].isExpanded;
        }
    }
    for (var index = 0; index < allTreeNodes.length; index++) {
        allTreeNodes[index].isVisible = false;
        allTreeNodes[index].isExpanded = true;
    }
    for (var index = 0; index < matchingTreeNodes.length; index++) {
        var currentTreeNode = matchingTreeNodes[index];
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
        for (var index = 0; index < allTreeNodes.length; index++) {
            allTreeNodes[index].isExpanded = expandedStateBeforeSearch[index];
        }
        expandedStateBeforeSearch = null;
        if (null != currentlyDisplayedTreeNode) {
            var currentTreeNode = currentlyDisplayedTreeNode.parent;
            while (null != currentTreeNode) {
                currentTreeNode.isExpanded = true;
                currentTreeNode = currentTreeNode.parent;
            }
        }
    }
    for (var index = 0; index < allTreeNodes.length; index++) {
        allTreeNodes[index].isVisible = true;
    }
    rootTreeNode.updateVisibleChildren();
    updateTree();
}
var mustScrollAfterLoad = false;
function search() {
    filterTree(true);
    updateTree();
    var matchingNodeCount = 0;
    var nodeToLoad = null;
    for (var index = 0; index < allTreeNodes.length; index++) {
        if (allTreeNodes[index].isVisible && 0 == allTreeNodes[index].children.length) {
            matchingNodeCount++;
            if (1 == matchingNodeCount) {
                document.getElementById("dummyFocus").focus();
                mustScrollAfterLoad = true;
                nodeToLoad = allTreeNodes[index];
            }
            else if (2 == matchingNodeCount) {
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
function highlightSearch(id) {
    var searchTerms = getSearchTerms();
    var prefix = getPrefix(searchTerms);
    var matchedSections = new Array();
    var unmatchedSections = new Array();
    for (var index = 0; index < currentlyDisplayedTreeNode.sections.length; index++) {
        if (0 == searchTerms.length || !matchesSection(currentlyDisplayedTreeNode.sections[index], searchTerms, prefix)) {
            unmatchedSections.push(currentlyDisplayedTreeNode.sections[index].id);
        }
        else {
            matchedSections.push(currentlyDisplayedTreeNode.sections[index].id);
        }
    }
    for (var index = 0; index < unmatchedSections.length; index++) {
        document.getElementById(unmatchedSections[index]).className = "unmatchedSection";
    }
    for (var index = 0; index < matchedSections.length; index++) {
        document.getElementById(matchedSections[index]).className = "matchedSection";
    }
    if (mustScrollAfterLoad) {
        if (0 < matchedSections.length) {
            document.getElementById(matchedSections[0]).scrollIntoView();
            window.scrollTo(window.scrollX, window.scrollY - 20);
        }
        else {
            window.scrollTo(0, 0);
        }
    }
    mustScrollAfterLoad = false;
}
