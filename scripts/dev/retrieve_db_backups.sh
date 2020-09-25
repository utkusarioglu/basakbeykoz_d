PROJECT="basakbeykoz"
USER="utkusarioglu"
ZONE="europe-west3-c"
VM="basakbeykoz-7"
DATE=$(date +'%Y%m%d')
VM_SQL_BACKUP_DIR=/mnt/disks/content_disk/backups/sql
LOCAL_SQL_BACKUP_DIR=~/Do*/P*/Ba*/*d/backups/sql

gcloud beta compute ssh --zone $ZONE $VM --project $PROJECT --command "docker exec basakbeykoz_db_p mysqldump -uroot -proot exampledb > $VM_SQL_BACKUP_DIR/$DATE.sql"
gcloud compute scp --recurse --compress $USER@$VM:$VM_SQL_BACKUP_DIR/* $LOCAL_SQL_BACKUP_DIR