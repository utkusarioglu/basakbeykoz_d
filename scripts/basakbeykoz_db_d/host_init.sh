#!/bin/bash
#this line is a curl command in production that gets the ip of the vm
if [ -z $1 ]; then
    echo "Using localhost for IP"
    EXTERNAL_IP="http://localhost"
else 
    echo "Using $1 for IP"
    EXTERNAL_IP=$1
fi
CONTAINER_NAME="basakbeykoz_db_d"
docker exec -it $CONTAINER_NAME sh -c "bash /scripts/container_init.sh $EXTERNAL_IP"
