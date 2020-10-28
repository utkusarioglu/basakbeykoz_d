#! /bin/bash

PARTS_TO_UPDATE=$@

echo "Updating: $@"
bash scripts/toProduction/upload.sh "$PARTS_TO_UPDATE"