#!/bin/bash

DB_USER=$1
DB_PASS=$2
DB_NAME=$3

# Checks whether a param for the replacement url has been provided
if [ -z "$4" ]; then
    echo 'Script needs the swap url as fourth parameter'
    exit 1
else
    PROD_URL=$4
fi

# Retrieves the url that is currently in the db
read -r -d '' GET_HOME_QUERY << EOM
SELECT option_value 
FROM wp_options 
WHERE option_name = 'home';
EOM
DEV_URL=$(mysql -s -N --user="$DB_USER" --password="$DB_PASS" --database="$DB_NAME" --execute="$GET_HOME_QUERY")

function clean_url() {
    DEV_URL=$1
    # Removes the trailing slash if there is one
    if [ "${DEV_URL: -1}" == "/" ]; then
        DEV_URL=${DEV_URL: 0: $(expr ${#DEV_URL} - 1)}
    fi
    # Removes prefixes if there are any
    PREFIXES=("http://" "https://")
    for prefix in ${PREFIXES[@]}; do
        if [ "${DEV_URL:0:${#prefix}}" == $prefix ]; then
            DEV_URL=${DEV_URL:${#prefix}:${#DEV_URL}}
        fi
    done
    echo $DEV_URL
}

DEV_URL=$(clean_url $DEV_URL)
PROD_URL=$(clean_url $PROD_URL)

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
