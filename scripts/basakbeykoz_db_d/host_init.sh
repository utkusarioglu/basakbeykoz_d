#!/bin/bash
#this line is a curl command in production that gets the ip of the vm
EXTERNAL_IP="http://localhost"
CONTAINER_NAME="basakbeykoz_db_d"
docker exec -it $CONTAINER_NAME sh -c "bash /scripts/container_init.sh $EXTERNAL_IP"
