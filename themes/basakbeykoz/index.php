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
  <link href="/wp-content/themes/basakbeykoz/static/css/0.chunk.css?852266cc05eca7f51841" rel="stylesheet"><link href="/wp-content/themes/basakbeykoz/static/css/main.chunk.css?852266cc05eca7f51841" rel="stylesheet"></head>
  <body>
    <noscript>
        You cannot run this app without javascript:/
    </noscript>
    <div id="root"></div>
  <script src="/wp-content/themes/basakbeykoz/static/js/bundle.js?852266cc05eca7f51841"></script><script src="/wp-content/themes/basakbeykoz/static/js/0.chunk.js?852266cc05eca7f51841"></script><script src="/wp-content/themes/basakbeykoz/static/js/main.chunk.js?852266cc05eca7f51841"></script></body>
</html>
