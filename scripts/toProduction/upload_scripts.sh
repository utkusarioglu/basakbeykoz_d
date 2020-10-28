#!/bin/bash

source .env

LOCAL_SCRIPTS_DIR_1=$LOCAL_PROJECT_DIR/scripts/atProduction
LOCAL_SCRIPTS_DIR_2=$LOCAL_PROJECT_DIR/scripts/basakbeykoz_db
REMOTE_SCRIPTS_DIR=$REMOTE_PROJECT_DIR/scripts

# Create plugins dir if it doesn't exist
COMMAND="mkdir -p $REMOTE_SCRIPTS_DIR"
gcloud compute ssh $USER@$VM --zone=$ZONE --command="$COMMAND"

# Do the atProduction upload
gcloud compute scp --recurse --compress $LOCAL_SCRIPTS_DIR_1/* $USER@$VM:$REMOTE_SCRIPTS_DIR --zone $ZONE

# Do the basakbeykoz_db upload
gcloud compute scp --recurse --compress $LOCAL_SCRIPTS_DIR_2 $USER@$VM:$REMOTE_SCRIPTS_DIR --zone $ZONE