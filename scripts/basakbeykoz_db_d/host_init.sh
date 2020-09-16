#!/bin/bash
#this line is a curl command in production that gets the ip of the vm
EXTERNAL_IP="http://localhost"
docker exec -it basakbeykoz_db_p sh -c "bash /scripts/container_init.sh $EXTERNAL_IP"
