#!/bin/bash
DATE=$(date +'%Y%m%d')

#prepare react production build
cd ./themes/basakbeykoz/react-src
sudo yarn build

# move theme's dev copy out of the way
cd ../../..
sudo mv ./themes/basakbeykoz ./basakbeykoz-dev

#place production build in the themes folder
sudo mv ./basakbeykoz-dev/basakbeykoz ./themes/basakbeykoz
docker build -t utkusarioglu/basakbeykoz:$DATE .

#remove dev folder and rename production folder for its place
sudo rm -rf ./themes/basakbeykoz
sudo mv ./basakbeykoz-dev ./themes/basakbeykoz
