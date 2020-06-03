FROM wordpress
WORKDIR /var/www/html

COPY ./plugins ./wp-content/plugins
COPY ./themes/basakbeykoz ./wp-content/themes/basakbeykoz
COPY ./uploads ./wp-content/uploads

EXPOSE 80
