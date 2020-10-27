#! /bin/bash

bash ./scripts/dev/sync_with_production.sh
wait
docker-compose -f ./docker-compose.dev.yml up -d 
#sleep can later be replaced by a better command later
sleep 20
sudo rm -rf ./themes/twenty* ./themes/index* 
sudo rm -rf ./plugins/akis* ./plugins/index* ./plugins/hello*
bash ./scripts/basakbeykoz_db_d/host_init.sh
(cd ./themes/basakbeykoz/react-src && sudo yarn start)
