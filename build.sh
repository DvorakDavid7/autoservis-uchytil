#!/usr/bin/env bash

FE_DIR=landing-page-fe

cd $FE_DIR || (echo "$FE_DIR not found" || exit 1)

npm run generate

cp -r .output/public/* ../public_html

cd ..
