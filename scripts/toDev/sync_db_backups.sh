# source supplies project config
source .env

REMOTE_SQL_BACKUP_DIR=/mnt/disks/content_disk/backups/sql
LOCAL_SQL_BACKUP_DIR=$LOCAL_PROJECT_DIR/backups/sql

gcloud beta compute ssh --zone $ZONE $VM --project $PROJECT --command "docker exec basakbeykoz_db_p mysqldump -uroot -proot exampledb > $VM_SQL_BACKUP_DIR/$DATE.sql"
gcloud compute scp --recurse --compress $USER@$VM:$REMOTE_SQL_BACKUP_DIR/* $LOCAL_SQL_BACKUP_DIR