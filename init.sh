#! /bin/bash

docker-compose up -d
sudo rm -rf ./themes/twenty* ./themes/index* 
sudo rm -rf ./plugins/akis* ./plugins/index* ./plugins/hello*
#sleep can later be replaced by a better command later
sleep 20
bash ./scripts/basakbeykoz_db_d/host_init.sh 192.168.1.152
(cd ./themes/basakbeykoz/react-src && sudo yarn start)