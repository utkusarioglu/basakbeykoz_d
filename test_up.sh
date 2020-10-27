#!/bin/bash
DATE=$(date +'%Y%m%d')

#prepare react production build in dist folder
(cd ./themes/basakbeykoz/react-src && sudo yarn build && cd ../../..)

# Run docker compose with the test config
docker-compose -f docker-compose.test.yml up