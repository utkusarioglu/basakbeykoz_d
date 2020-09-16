echo "wp.sh working"
cd /var/www/html/wp-content/themes
rm -rf twenty*
rm index.php
cd ../plugins
rm -rf akismet
rm hello.php
rm index.php

cd ../..
chown -R www-data:www-data wp-content

cd /
source /etc/apache2/envvars
apache2 -S 
# sleep 200