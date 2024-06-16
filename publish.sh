#!/usr/bin/env bash

npm run generate

rm -rf public_html

mkdir public_html

cp -r .output/public/* public_html
