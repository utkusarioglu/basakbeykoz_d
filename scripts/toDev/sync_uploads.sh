# source supplies project config
source .env

REMOTE_UPLOADS_BACKUP_DIR=/mnt/disks/content_disk/wp-content/uploads
LOCAL_UPLOADS_BACKUP_DIR=$LOCAL_PROJECT_DIR/backups/uploads

gcloud compute scp --recurse --compress $USER@$VM:$REMOTE_UPLOADS_BACKUP_DIR/* $LOCAL_UPLOADS_BACKUP_DIR