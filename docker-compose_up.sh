#! /bin/bash

docker-compose up -d
sudo rm -rf ./themes/twenty* ./themes/index* 
sudo rm -rf ./plugins/akis* ./plugins/index* ./plugins/hello*
(cd ./themes/basakbeykoz/react-src && sudo yarn start)