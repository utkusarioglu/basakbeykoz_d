<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
  // $GA_TRACKING_ID = "UA-171670902-1"
?>
<!DOCTYPE html>
<html lang="tr">
<head>
<?php $BRC_TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH); ?>
<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeClient.js'></script>

<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeErrorOverlay.js'></script>

<script> wpThemeClient.start("ws", "192.168.1.152", "8090"); </script>

  <meta charset="utf-8" />
  <link rel="shortcut icon" href="/wp-content/themes/basakbeykoz/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#505050" />
  <meta
    name="description"  
    content="Profesyonel koc Basak Beykoz'un internet sitesi"
  />
  <link rel="apple-touch-icon" href="<?php echo $TEMPLATE_PATH; ?>/logo192.png" />
  <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />
  <title>Basak Beykoz</title>
  <link href="/wp-content/themes/basakbeykoz/static/css/1.chunk.css?2347e919fd82b058e154" rel="stylesheet"><link href="/wp-content/themes/basakbeykoz/static/css/main.chunk.css?2347e919fd82b058e154" rel="stylesheet"></head>
  <body>
    <noscript>
        You cannot run this app without javascript:/
    </noscript>
    <div id="root"></div>
  <script src="/wp-content/themes/basakbeykoz/static/js/bundle.js?2347e919fd82b058e154"></script><script src="/wp-content/themes/basakbeykoz/static/js/1.chunk.js?2347e919fd82b058e154"></script><script src="/wp-content/themes/basakbeykoz/static/js/main.chunk.js?2347e919fd82b058e154"></script></body>
</html>
