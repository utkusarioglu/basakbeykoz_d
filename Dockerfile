FROM wordpress
WORKDIR /var/www/html

# Remove the plugins and themes that come with vanilla wp
RUN rm -rf ./wp-content/themes/*
RUN rm -rf ./wp-content/plugins/*

# !TODO add uploads.ini here
COPY ./etc/uploads/uploads.ini /usr/local/etc/php/conf.d/uploads.ini 

# copy content created for this product
COPY ./plugins ./wp-content/plugins
COPY ./themes/basakbeykoz ./wp-content/themes/basakbeykoz
COPY ./uploads ./wp-content/uploads

# adjust owners, privileges
RUN chown -R www-data:www-data ./wp-content


EXPOSE 80
