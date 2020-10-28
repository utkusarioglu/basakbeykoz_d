#!/bin/bash

source .env

LOCAL_CONFIG_PATH=$LOCAL_PROJECT_DIR/docker-compose.prod.yml
# Note that the name of the docker-compose file is altered during upload
# This is done for ease of use in production
REMOTE_CONFIG_PATH=$REMOTE_PROJECT_DIR/docker-compose.yml

gcloud compute scp --compress $LOCAL_CONFIG_PATH $USER@$VM:$REMOTE_CONFIG_PATH --zone $ZONE