#!/bin/bash

# source supplies project config
source .env

COMMAND="bash $REMOTE_PROJECT_DIR/scripts/init.sh $REMOTE_PROJECT_DIR"
gcloud compute ssh $USER@$VM --zone=$ZONE --command="$COMMAND"