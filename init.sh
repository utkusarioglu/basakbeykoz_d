#! /bin/bash

docker-compose up -d
sudo rm -rf ./themes/twenty* ./themes/index* 
sudo rm -rf ./plugins/akis* ./plugins/index* ./plugins/hello*
bash ./scripts/basakbeykoz_db_d/host_init.sh 192.168.1.152
(cd ./themes/basakbeykoz/react-src && sudo yarn start)