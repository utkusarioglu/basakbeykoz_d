FROM wordpress
WORKDIR /var/www/html

COPY ./plugins ./wp-content/plugins

RUN yarn build --cwd ./themes/basakbeykoz/react-src
COPY ./themes/basakbeykoz/react-src/basakbeykoz ./wp-content/plugins/basakbeykoz

EXPOSE 80
