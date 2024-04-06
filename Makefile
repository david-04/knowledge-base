TS_SOURCES=$(wildcard src/*.ts)
JS_TARGETS=$(patsubst src/%.ts, docs/js/%.js, $(TS_SOURCES))
GENERATED_FILES=docs/css/epim.css docs/js/content.js docs/js/metadata.js $(wildcard docs/data/* docs/data/*/*)

#-----------------------------------------------------------------------------------------------------------------------
# Main target and help
#-----------------------------------------------------------------------------------------------------------------------

autorun : $(JS_TARGETS) $(GENERATED_FILES);

help: ;
	$(info $() $() clean ...... delete node_modules)
	$(info $() $() commit ..... add/commit all modified file to git)
	$(info $() $() compile .... compile the TypeScript sources)
	$(info $() $() generate ... extract html/js/css/images from the "extracted" directory)
	$(info $() $() install .... copy the knowledge base to $(PE_PROGRAMS)/Projects/WebApps/knowledge-base)
	$(info $() $() push ....... force-push the knowledge base upstream)
	$(info $() $() tsc ........ compile the TypeScript sources)
	$(info $() $() uplift ..... upgrade Awesomeplete)

#-----------------------------------------------------------------------------------------------------------------------
# Compile the app
#-----------------------------------------------------------------------------------------------------------------------

compile tsc : $(JS_TARGETS);

$(JS_TARGETS) : $(TS_SOURCES) tsconfig.json Makefile
	echo Compiling...
	tsc

#-----------------------------------------------------------------------------------------------------------------------
# Generate the knowledge base data (convert export into html+css+js)
#-----------------------------------------------------------------------------------------------------------------------

generate : $(GENERATED_FILES);

$(GENERATED_FILES) : $(wildcard export/index.htm) bin/extract.awk Makefile
	echo "Converting knowledge base data to html/css/js..."
	rm -rf docs/data/*.htm* docs/data/images/*
	cat $(wildcard export/*.htm export/*.html) | dos2unix | gawk -f bin/extract.awk -v sourceFolder=export -v outputFolder=docs
	dos2unix -q docs/js/metadata.js docs/js/content.js docs/css/epim.css
	echo "Copying images to docs/data/images..."
	cp $(wildcard export/*.jpg export/*.jpeg export/*.gif export/*.png) docs/data/images

#-----------------------------------------------------------------------------------------------------------------------
# Publish
#-----------------------------------------------------------------------------------------------------------------------

publish : compile generate install commit push;

commit :
	   echo "Adding and amend-commiting modified files..." \
	&& git add -u \
	&& git add docs/data \
	&& git commit --amend --no-edit \

push : commit
	echo "Force-pushing changes..."
	git push --force

install:
	   echo "Deleting $(PE_PROGRAMS)/Projects/WebApps/knowledge-base/*..." \
	&& rm -rf $(PE_PROGRAMS)/Projects/WebApps/knowledge-base/* \
	&& echo "Copying knowledge base to $(PE_PROGRAMS)/Projects/WebApps/knowledge-base..." \
	&& cd docs \
	&& cp -r * $(PE_PROGRAMS)/Projects/WebApps/knowledge-base/

#-----------------------------------------------------------------------------------------------------------------------
# Uplift dependendencies
#-----------------------------------------------------------------------------------------------------------------------

uplift :
	   echo "Upgrading dependencies..." \
	&& npm install awesomplete@latest \
	&& echo "Copying awesompleste from node_modules to docs..." \
	&& cp node_modules/awesomplete/awesomplete.min.js docs/js/

#-----------------------------------------------------------------------------------------------------------------------
# Clean
#-----------------------------------------------------------------------------------------------------------------------

clean :
    ifneq "$(wildcard node_modules)" ""
		rm -rf node_modules
    endif
