PROJECT="basakbeykoz"
USER="utkusarioglu"
ZONE="europe-west3-c"
VM="basakbeykoz-7"
DATE=$(date +'%Y%m%d')
VM_UPLOADS_BACKUP_DIR=/mnt/disks/content_disk/wp-content/uploads
LOCAL_UPLOADS_BACKUP_DIR=~/Do*/P*/Ba*/*d/uploads

gcloud compute scp --recurse --compress $USER@$VM:$VM_UPLOADS_BACKUP_DIR/* $LOCAL_UPLOADS_BACKUP_DIR