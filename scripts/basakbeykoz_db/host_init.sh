#!/bin/bash

DB_USER=exampleuser
DB_PASS=examplepass
DB_NAME=exampledb

#this line gets the external ip for the vm
if [ -z $1 ]; then
    echo "Using Google VM IP"
    EXTERNAL_IP=$(curl -H "Metadata-Flavor: Google" http://169.254.169.254/computeMetadata/v1/instance/network-interfaces/0/access-configs/0/external-ip)
    if [ -z $EXTERNAL_IP ]; then
        echo "Using eth0 IP"
        EXTERNAL_IP=$(nmcli device show eth0 | awk '/4.A/ {print $2}' | cut -d / -f1)
    fi
else 
    echo "Using $1 for IP"
    EXTERNAL_IP=$1
fi

# Note that the container name is retrieved by a docker command because this 
# name differs in dev and production containers. This retrieval scheme can be
# a source of errors in the dev environment but it shall be safe as there would
# not be any other similarly named container
CONTAINER_NAME=$(docker container ls --format '{{.Names}}' | grep basakbeykoz_db)
echo "$CONTAINER_NAME is being initialized..."

PARAMS="$DB_USER $DB_PASS $DB_NAME $EXTERNAL_IP"
docker exec $CONTAINER_NAME sh -c "bash /scripts/container_init.sh $PARAMS"