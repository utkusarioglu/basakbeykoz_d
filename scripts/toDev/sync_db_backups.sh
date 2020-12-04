# source supplies project config
source .env
DATE=`date +%Y%m%d`
REMOTE_SQL_BACKUP_DIR=/mnt/disks/content_disk/backups/sql
LOCAL_SQL_BACKUP_DIR=$LOCAL_PROJECT_DIR/backups/sql

NEW_BACKUP_FILE_PATH="$REMOTE_SQL_BACKUP_DIR/$DATE.sql"

echo "Creating backup: $NEW_BACKUP_FILE_PATH"
gcloud beta compute ssh --zone $ZONE $VM --project $PROJECT --command "docker exec basakbeykoz_db_p mysqldump -uroot -proot exampledb > $NEW_BACKUP_FILE_PATH"

echo "Downloading all the backups on $REMOTE_SQL_BACKUP_DIR..."
gcloud compute scp --recurse --compress $USER@$VM:$REMOTE_SQL_BACKUP_DIR/* $LOCAL_SQL_BACKUP_DIR