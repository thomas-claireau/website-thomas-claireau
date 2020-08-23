#!/bin/sh
set -xe

# if [ $TRAVIS_BRANCH == 'recette' ]; then
$ERRORSTRING="Error. Please make sure you've indicated correct parameters"
if [ $# -eq 0 ]; then
	echo $ERRORSTRING
elif [ $1 == "live" ]; then
	if [[ -z $2 ]]; then
		echo "Running dry-run"
		rsync --dry-run -az --force --delete --progress --exclude-from=rsync_exclude.txt -e "ssh -p $PORT" ./ $USERNAME@$HOST:$PROJECT
	elif [ $2 == "go" ]; then
		echo "Running actual deploy"
		rsync -az --force --delete --progress --exclude-from=rsync_exclude.txt -e "ssh -p $PORT" ./ $USERNAME@$HOST:$PROJECT
	else
		echo $ERRORSTRING
	fi
fi
# else
# 	echo "Not deploying, since this branch isn't recette."
# fi
