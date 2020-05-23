#!/bin/bash
cd ./themes/basakbeykoz/react-src
yarn build --cwd 
cd ../../..
docker build -t utkusarioglu/basakbeykoz .
# rm -rf ./themes/basakbeykoz/basakbeykoz
