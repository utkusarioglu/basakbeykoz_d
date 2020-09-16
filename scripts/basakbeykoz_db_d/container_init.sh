#!/bin/bash

if [ -z "$1" ]; then
    echo "Script needs the first parameter to be the IP of the VM"
    exit 1
else
    EXTERNAL_IP=$1
fi

bash /scripts/container_load_backup.sh
bash /scripts/container_fix_wp_url.sh $EXTERNAL_IP
