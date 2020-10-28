#! /bin/bash

bash ./scripts/toDev/sync_with_production.sh
wait
docker-compose -f ./docker-compose.dev.yml up -d 

# Sleep can later be replaced by a better command later
# It's sudo so you don't have to wait around 20 seconds to input the password
# for the following sudo commands
sudo sleep 20

# Remove wp default junk
sudo rm -rf ./themes/twenty* ./themes/index* 
sudo rm -rf ./plugins/akis* ./plugins/index* ./plugins/hello*

# Initalize db 
bash ./scripts/basakbeykoz_db/host_init.sh

# Start yarn
(cd ./themes/basakbeykoz/react-src && sudo yarn start)
