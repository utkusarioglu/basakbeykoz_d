#!/bin/bash
cd ./themes/basakbeykoz/react-src
sudo yarn build
cd ../../..
sudo mv ./themes/basakbeykoz ./basakbeykoz-dev
sudo mv ./basakbeykoz-dev/basakbeykoz ./themes/basakbeykoz
docker build -t utkusarioglu/basakbeykoz .
sudo rm -rf ./themes/basakbeykoz
sudo mv ./basakbeykoz-dev ./themes/basakbeykoz
