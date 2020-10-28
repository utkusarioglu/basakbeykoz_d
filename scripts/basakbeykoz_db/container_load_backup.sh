#!/bin/bash

DB_USER=$1
DB_PASS=$2
DB_NAME=$3

BACKUPS_DIR="/backups/sql"
echo "Finding newest backup from: $BACKUPS_DIR" 

if [ -z "$4" ]; then
    unset -v DB_BACKUP_FILE
    for file in "$BACKUPS_DIR"/*; do
    [[ $file -nt $LATEST_FILE ]] && DB_BACKUP_FILE=$file
    done
else
    DB_BACKUP_FILE=$4
fi

echo "Loading DB backup from: $DB_BACKUP_FILE"

mysql -u"$DB_USER" -p"$DB_PASS" $DB_NAME < $DB_BACKUP_FILE
