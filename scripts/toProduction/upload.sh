#!/bin/bash

TO_PRODUCTION_DIR=./scripts/toProduction

source .env

# Create project dir if it doesn't exist
COMMAND="mkdir -p $PROJECT"
gcloud compute ssh $USER@$VM --zone=$ZONE --command="$COMMAND"

echo "Starting upload"

if [[ -z $@ ]] || [[ $@ == *"docker"* ]]; then
  echo "Uploading docker config..."
  bash $TO_PRODUCTION_DIR/upload_docker_config.sh
fi

if [[ -z $@ ]] || [[ $@ == *"plugins"* ]]; then
  echo "Uploading plugins..."
  bash $TO_PRODUCTION_DIR/upload_plugins.sh
fi

if [[ -z $@ ]] || [[ $@ == *"scripts"* ]]; then
  echo "Uploading scripts..."
  bash $TO_PRODUCTION_DIR/upload_scripts.sh
fi

if [[ -z $@ ]] || [[ $@ == *"theme"* ]]; then
  echo "Uploading theme..."
  bash $TO_PRODUCTION_DIR/upload_theme.sh
fi

echo "Upload complete"