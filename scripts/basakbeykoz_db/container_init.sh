#!/bin/bash

DB_USER=$1
DB_PASS=$2
DB_NAME=$3

if [ -z "$4" ]; then
    echo "Script needs the first parameter to be the IP of the VM"
    exit 1
else
    EXTERNAL_IP=$4
fi

bash /scripts/container_load_backup.sh $DB_USER $DB_PASS $DB_NAME
bash /scripts/container_fix_wp_url.sh $DB_USER $DB_PASS $DB_NAME $EXTERNAL_IP
