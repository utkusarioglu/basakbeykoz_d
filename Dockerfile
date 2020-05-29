FROM wordpress
WORKDIR /var/www/html

COPY ./plugins ./wp-content/plugins

# RUN yarn build --cwd ./themes/basakbeykoz/react-src
COPY ./themes/basakbeykoz ./wp-content/themes/basakbeykoz

EXPOSE 80
