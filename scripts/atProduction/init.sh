#!/bin/bash

# Check whether project dir was supplied as param
if [[ -z $1 ]]
then
  echo "Remote project dir needs to be the first param"
  exit 1
else
  REMOTE_PROJECT_DIR=$1
fi

echo "Switching to project dir: $REMOTE_PROJECT_DIR"
cd $REMOTE_PROJECT_DIR

# Mount the uploads/backup disk
bash scripts/disk/mount_disk.sh

# Implement docker-compose
bash scripts/docker-compose/host_init.sh 

# Enable docker compose alias
source ~/.bashrc

echo "Starting docker..."
# Using the super long docker run command instead of the alias as it
# has consistently created problems
docker run --rm \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v "$PWD:$PWD" \
    -w="$PWD" \
    docker/compose:1.24.0 up -d

echo "Waiting for the containers to boot..."
sleep 20

# upload db backup
echo "Applying latest database backup..."
bash scripts/basakbeykoz_db/host_init.sh