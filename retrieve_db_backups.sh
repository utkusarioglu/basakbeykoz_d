PROJECT="basakbeykoz"
ZONE="europe-west3-c"
VM="basakbeykoz-7"
DATE=$(date +'%Y%m%d')
VM_BACKUP_DIR=/mnt/disks/content_disk/backups/sql
LOCAL_BACKUP_DIR=~/Do*/P*/Ba*/*d/backups/sql

gcloud beta compute ssh --zone $ZONE $VM --project $PROJECT --command "docker exec basakbeykoz_db_p mysqldump -uroot -proot exampledb > $VM_BACKUP_DIR/$DATE.sql"
gcloud compute scp --recurse utkusarioglu@basakbeykoz-7:$VM_BACKUP_DIR/* $LOCAL_BACKUP_DIR