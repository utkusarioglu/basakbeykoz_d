#!/bin/bash
docker run docker/compose:latest version
chmod 744 $(pwd)
echo alias docker-compose="'"'docker run --rm \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v "$PWD:$PWD" \
    -w="$PWD" \
    docker/compose:latest'"'" >> ~/.bashrc
source ~/.bashrc
# exec bash