#!/bin/bash

source .env

LOCAL_THEME_DIR=$LOCAL_PROJECT_DIR/dist
REMOTE_THEME_DIR=$REMOTE_PROJECT_DIR/dist

# Create plugins dir if it doesn't exist
COMMAND="mkdir -p $REMOTE_THEME_DIR"
gcloud compute ssh $USER@$VM --zone=$ZONE --command="$COMMAND"

echo 'Altering permissions'
gcloud compute ssh $USER@$VM --zone $ZONE --command "sudo chown -R $USER:$USER $REMOTE_THEME_DIR"
echo 'Uploading theme files'
gcloud compute scp --recurse --compress $LOCAL_THEME_DIR/* $USER@$VM:$REMOTE_THEME_DIR --zone $ZONE 
# echo 'Reverting permissions'
# gcloud compute ssh $USER@$VM --zone $ZONE --command "sudo chown -R www-data:www-data $REMOTE_THEME_DIR"