#!/bin/bash
CONTENT_DISK_PATH=/mnt/disks/content_disk
sudo mkdir $CONTENT_DISK_PATH
sudo mount /dev/sdb $CONTENT_DISK_PATH
bash ./scripts/docker-compose/host_init.sh 

# For now, do the next ones manually
# source ~/.bashrc
# docker-compose up -d
# sleep 20
# bash ./scripts/basakbeykoz_db_p/host_init.sh
