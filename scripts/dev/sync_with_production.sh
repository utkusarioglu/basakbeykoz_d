rm -rf backups/uploads/*
rm -rf backups/sql/*

bash scripts/dev/sync_uploads.sh
bash scripts/dev/sync_db_backups.sh