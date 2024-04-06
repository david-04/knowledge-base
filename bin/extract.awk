BEGIN {
    IGNORECASE = 1
    metadata = ""
}

{
    content = content $0 "\n"
}

END {

    if(match(content,/<style type="text\/css"><!--.*--><\/style>/)) { #"
        css = substr(content,RSTART+27, RLENGTH-27-11)
        gsub(/\r/,"",css)
        gsub(/\n[ \t]*font-size:[^\n]*\n/,"\n", css)
        gsub(/\n[ \t]*font-family:[^\n]*(Consolas|Inconsolata|monospace|Courier|Office Code Pro Medium)[^\n]*\n/," font-family: monospace, 'Office Code Pro Medium', 'Inconsolata', 'Consolas', monospace;\n",css);
        gsub(/\n[ \t]*font-family:[^\n]*,[^\n]*\n/,"  font-family:sans-serif;\n",css);
        gsub(/\n[ \t]*body[^\{\n]*/,"  body_UNUSED\n",css);
        print css > outputFolder "/css/epim.css"
    }

    total = split(content, nodes, /<ul class=list0>\n<li style="text-indent: 10px"><a name="Note[0-9]+"><\/a>\n<span class=rvts1>/)
    currentNode = 0

    for (idx = 2; idx <= total; idx++) {

        content = nodes[idx]

        title = content
        sub(/<.*/,"",title)
        sub(/^[^<]*<\/span><\/li>\n<\/ul>\n<p><span class=rvts6>\(Last modified: [0-9]+\/[0-9]+\/[0-9]+ [0-9]+:[0-9]+ &nbsp; Path: /,"",content)

        path = content
        sub(/\).*/,"",path)
        sub(/^[^\)]*\)/,"",content)
        path = path title
        sub(/^<\/span><\/p>\n<p>Leaf 1:<\/p>/,"",content)

        if (path ~ /\\Knowledge Base\\/ && path !~ /\\(Operating Systems|Archive|_.*|mySQL|Oracle|Teradata|VBA|Archive)(\\|$)/) {
            sub(/^\\?Knowledge Base\\?/,"",path)
            processNode(path, content, sprintf("node-%4.4d.htm", ++currentNode))
        } else {
            while(match(content, /src=["'][^"']*\.(jpg|png|gif)["']/)) {
                image = substr(content, RSTART+5, RLENGTH-6)
                content = substr(content, RSTART+RLENGTH)
                unusedImages = unusedImages " '" sourceFolder "/" image "'"

            }
        }
    }

    system("rm -f " unusedImages)

    print metadata > outputFolder "/js/metadata.js"

}


function processNode(path, content, filename,        before,middle,after,header,keywords,sections) {

    content = gensub(/<div><table[^>]*>\n<tr[^>]*>\n<td[^>]*d2d2d2[^>]*><div><table[^>]*>\n<tr[^>]*>\n<td[^>]*><p[^>]*><span[^>]*>([^<]*)<\/span><\/p>\n<\/td>\n<td[^>]*><p[^>]*><span[^>]*>([^<]*)(<br\/?>)?<\/span><\/p>\n<\/td>\n<\/tr>\n<\/table>\n<\/div>\n<\/td>\n<\/tr>\n<\/table>\n<\/div>/, "<DavidsSection>\\1\r\\2</DavidsSection>", "g", content)

    sub(/^\\/,"",path)
    sub(/\\$/,"",path)
    gsub(/\\/,"', '",path)
    metadata = metadata "addNode(\n"
    metadata = metadata "    ['" path "'],\n"
    metadata = metadata "    'data/" filename "',\n"
    metadata = metadata "    ["


    currentSection = 0
    while(match(content, /<DavidsSection>[^<]*<\/DavidsSection>/)) {
        before = substr(content, 1, RSTART-1)
        middle = substr(content, RSTART+15, RLENGTH-15-16)
        after = substr(content, RSTART+RLENGTH)

        header = middle
        sub(/\r.*/,"",header)
        keywords = middle
        sub(/.*\r/,"",keywords)

        currentSection++

        gsub(/[ \t]+/,"', '",keywords)
        metadata = metadata (1 < currentSection ? "," : "") "\n        ['nodeSection" currentSection "', ['" keywords "']]"

        content = before "<div id='nodeSection" currentSection "'>" header "</div>" after
    }


    if (0 < currentSection) {
        metadata = metadata "\n    ]\n"
    } else {
        metadata = metadata "]\n"
    }
    metadata = metadata ");\n"


    gsub(/^\n+<p><span[^>]*><br><\/span><\/p>/,"",content)
    gsub(/ src="Img/, " src=\"data/images/Img", content)

    print content > outputFolder "/data/" filename
    close(outputFolder "/data/" filename)

    gsub(/\\/,"\\\\",content)
    gsub(/"/,"\\\"",content)
    gsub(/\r?\n/,"\\n",content)
    print "addFile(\"data/" filename "\", \"" content "\");" > outputFolder "/js/content.js"
}
