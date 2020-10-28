#! /bin/bash

CONTENT_DISK_PATH=/mnt/disks/content_disk

if [ ! -d "$CONTENT_DISK_PATH" ]
then 
  echo 'Mounting content disk...'
  sudo mkdir $CONTENT_DISK_PATH
  sudo mount /dev/sdb $CONTENT_DISK_PATH
else
  echo 'Content disk was previously mounted, skipping'
fi 
