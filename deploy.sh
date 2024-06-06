#!/usr/bin/env bash

USER=u308982183
IP=195.35.49.26
PORT=65002
TARGET_DIR=/home/u308982183/domains/dvorakdavid.info

FE_DIR=landing-page-fe

cd $FE_DIR || (echo "$FE_DIR not found" || exit 1)

npm run generate

cp -r .output/public ../public

cd ..

# zip the project
find . \( -name "node_modules" -o -name "vendor" -o -name ".git" \) -prune -o -type f -print | zip -r public_html.zip -@

#scp -P $PORT dist.zip $USER@$IP:$TARGET_DIR
#
#rm dist.zip
#
#ssh $USER@$IP -p $PORT <<EOF
#    cd $TARGET_DIR
#    unzip dist.zip
#    rm -rf $TARGET_DIR/public_html/*
#    cp -r .output/public_html/* public_html
#    rm -rf .output dist.zip
#EOF
