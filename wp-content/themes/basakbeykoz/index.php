<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<?php $BRC_TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH); ?>
<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeClient.js'></script>

<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeErrorOverlay.js'></script>

<script> wpThemeClient.start("ws", "127.0.0.1", "8090"); </script>

<meta charset="utf-8" />
    <link rel="shortcut icon" href="/wp-content/themes/basakbeykoz/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#505050" />
    <meta
      name="description"
      content="Web site created using create-react-wptheme"
    />
    <link rel="apple-touch-icon" href="<?php echo $TEMPLATE_PATH; ?>/logo192.png" />
    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />
    <title>React WordPress Theme</title>
<link href="/wp-content/themes/basakbeykoz/static/css/main.chunk.css?01a3659212d75bb6405f" rel="stylesheet"></head>
    <body>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
    <script src="/wp-content/themes/basakbeykoz/static/js/bundle.js?01a3659212d75bb6405f"></script><script src="/wp-content/themes/basakbeykoz/static/js/0.chunk.js?01a3659212d75bb6405f"></script><script src="/wp-content/themes/basakbeykoz/static/js/main.chunk.js?01a3659212d75bb6405f"></script></body>
</html>
