#!/bin/bash
docker-compose up -d
cd ./themes/basakbeykoz/react-src
code .
sudo yarn start
