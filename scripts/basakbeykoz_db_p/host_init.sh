#!/bin/bash
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

CONTAINER_NAME="basakbeykoz_db_p"
docker exec -it $CONTAINER_NAME sh -c "bash /scripts/container_init.sh $EXTERNAL_IP"