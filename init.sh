#! /bin/bash

docker-compose up -d
sudo rm -rf ./themes/twenty* ./themes/index* 
sudo rm -rf ./plugins/akis* ./plugins/index* ./plugins/hello*
#sleep can later be replaced by a better command later
sleep 20
bash ./scripts/basakbeykoz_db_d/host_init.sh
(cd ./themes/basakbeykoz/react-src && sudo yarn start)