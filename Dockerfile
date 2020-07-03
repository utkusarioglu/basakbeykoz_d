FROM wordpress
WORKDIR /var/www/html/wp-content

# Remove the plugins and themes that come with vanilla wp
RUN rm -rf ./themes/*
RUN rm -rf ./plugins/*

# copy content created for this product
COPY ./plugins ./plugins
COPY ./themes/basakbeykoz ./themes/basakbeykoz
COPY ./uploads ./uploads

# adjust owners, privileges
RUN chown www-data:www-data ./plugins
RUN chown www-data:www-data ./themes
RUN chown www-data:www-data ./uploads

EXPOSE 80
