<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#505050" />
    <meta
      name="description"
      content="Profesyonel koc Basak Beykoz'un internet sitesi"
    />
    <link rel="apple-touch-icon" href="<?php echo $TEMPLATE_PATH; ?>/logo192.png" />
    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />
    <title>Basak Beykoz</title>
</head>
    <body>
    <noscript>
        JavaScript olmadan bu siteyi gormeniz mumkun degil:/
    </noscript>
    <div id="root"></div>
    </body>
</html>
