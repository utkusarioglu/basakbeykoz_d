echo "wp.sh working"
cd /var/www/html/wp-content/themes
rm -rf twenty*
rm index.php
cd ../plugins
rm -rf akismet
rm hello.php
rm index.php

cd /
apache2 