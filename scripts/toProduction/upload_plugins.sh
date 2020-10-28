#!/bin/bash

source .env

LOCAL_PLUGINS_DIR=$LOCAL_PROJECT_DIR/plugins
REMOTE_PLUGINS_DIR=$REMOTE_PROJECT_DIR/plugins

# Create plugins dir if it doesn't exist
COMMAND="mkdir -p $REMOTE_PLUGINS_DIR"
gcloud compute ssh $USER@$VM --zone=$ZONE --command="$COMMAND"

# Upload content
gcloud compute scp --recurse --compress $LOCAL_PLUGINS_DIR/* $USER@$VM:$REMOTE_PLUGINS_DIR --zone $ZONE 

# Adjust file privileges
gcloud compute ssh $USER@$VM --zone $ZONE --command "docker exec basakbeykoz_wp_p bash -c 'chown -R www-data:www-data /var/www/html/wp-content'" 