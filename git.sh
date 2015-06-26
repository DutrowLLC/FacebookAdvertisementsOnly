#!/bin/bash

# Author: Jeffry Gutierrez
# Last modified: 8 nov, 2012

# This script adds all project files and updates the master branch and the local files.
# Usage:
# 		git.sh "Message for this update", quotes are necesary
# to run from cywing use: ./git.sh "message"

if [ "$#" == "0" ]; then
	echo "
	ERROR: No update description was passed to the script"
    echo "        Usage in git-shell:
	    
	    git.sh \"Message for this update\"

	quotes are required.
	"
	exit 1
else
	echo "Adding files..."

#	git add -- '*.js' '*.html' '*.css' '*.py' '*.txt' '*.png' '*.jpg' '*.gif' '*.exe' '*.sh' '*.sql'

	find . -type f \( -name '*.js' -o \
              -name '*.sql' -o \
              -name '*.html' -o \
              -name '*.css' -o  \
              -name '*.py' -o   \
              -name '*.ini' -o   \
              -name '*.txt' -o  \
              -name '*.png' -o  \
              -name '*.jpg' -o  \
              -name '*.gif' -o  \
              -name '*.sh' \) -print0 | xargs -0 git add

	echo "Commit"
	git commit -m "'$1'"

	echo "Pull from github master"
	git pull github master

	echo "Push to github master"
	git push github master
fi

