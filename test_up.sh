#!/bin/bash

# Prepare react production build in dist folder
(cd ./themes/basakbeykoz/react-src && sudo yarn build && cd ../../..)

# Remove needless artifacts
sudo rm -rf dist/!READY*

# Run docker compose with the test config
docker-compose -f docker-compose.test.yml up