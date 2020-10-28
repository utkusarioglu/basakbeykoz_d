rm -rf backups/uploads/*
rm -rf backups/sql/*

SCRIPTS_DIR=scripts/toDev

bash $SCRIPTS_DIR/sync_uploads.sh
bash $SCRIPTS_DIR/sync_db_backups.sh