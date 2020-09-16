#!/bin/bash

# !TODO
# Vars. These shall be moved to a separate file later on
DB_USER=exampleuser
DB_PASS=examplepass
DB_NAME=exampledb

# Checks whether a param for the replacement url has been provided
if [ -z "$1" ]; then
    echo 'Script needs the swap url as first parameter'
    exit 1
else
    PROD_URL=$1
fi

# Retrieves the url that is currently in the db
read -r -d '' GET_HOME_QUERY << EOM
SELECT option_value 
FROM wp_options 
WHERE option_name = 'home';
EOM
DEV_URL=$(mysql -s -N --user="$DB_USER" --password="$DB_PASS" --database="$DB_NAME" --execute="$GET_HOME_QUERY")

# Removes the trailing slash if there is one
if [ "${DEV_URL: -1}" == "/" ]; then
    DEV_URL=${DEV_URL:0:$(expr ${#DEV_URL} - 1)}
    DEV_URL_SLASH="$DEV_URL/"
fi

# Removes the trailing slash if there is one in the replacement url
if [ "${PROD_URL: -1}" == "/" ]; then
    PROD_URL=${PROD_URL:0:$(expr ${#PROD_URL} - 1)}
    PROD_URL_SLASH="$PROD_URL/"
fi

# Checks whether the urls are different
if [ $DEV_URL == $PROD_URL ]; then
    echo "Current url and replacement url are the same, quitting without change"
    exit 0
else
    echo "Replacing $DEV_URL with $PROD_URL"
fi

# Does the replacement
read -r -d '' REPLACE_QUERY << EOM
START TRANSACTION;

UPDATE wp_options 
SET option_value = replace(option_value, '$DEV_URL', '$PROD_URL') 
WHERE option_name = 'home' OR option_name = 'siteurl';

UPDATE wp_posts 
SET guid = replace(guid, '$DEV_URL','$PROD_URL');

UPDATE wp_posts 
SET post_content = replace(post_content, '$DEV_URL', '$PROD_URL');

UPDATE wp_postmeta 
SET meta_value = replace(meta_value,'$DEV_URL','$PROD_URL');

COMMIT;
EOM
mysql --user="$DB_USER" --password="$DB_PASS" --database="$DB_NAME" --execute="$REPLACE_QUERY"
