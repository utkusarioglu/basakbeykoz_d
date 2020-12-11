<?php
$TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
$WP_PAGE_TITLE = get_bloginfo('name');
$WP_PAGE_TAGLINE = get_bloginfo('description');
$WP_TITLE_SEPARATOR = ' - ';
$WP_SOCIAL_ITEMS = array(
  array(
    'title' => 'Instagram',
    'link' => 'https://www.instagram.com/basak_beykoz/',
    'icon' => '/wp-content/uploads/instagram.svg'
  ),
  array(
    'title' => 'Linkedin',
    'link' => 'https://www.linkedin.com/in/basakbeykoz/',
    'icon' => '/wp-content/uploads/linkedin.svg'
  )
)
// $GA_TRACKING_ID = "UA-171670902-1"
?>
<!DOCTYPE html>
<html lang="tr">

<head>
  <meta charset="utf-8" />
  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#505050" />
  <meta name="description" content="Profesyonel koc Basak Beykoz'un internet sitesi" />
  <link rel="apple-touch-icon" href="<?php echo $TEMPLATE_PATH; ?>/logo192.png" />
  <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />
  <title><?php echo $WP_PAGE_TITLE . $WP_TITLE_SEPARATOR . $WP_PAGE_TAGLINE ?></title>

  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="theme-color" content="#ffffff">

  <script>
    window.config = {
      WP_PAGE_TITLE: '<?php echo $WP_PAGE_TITLE ?>',
      WP_PAGE_TAGLINE: '<?php echo $WP_PAGE_TAGLINE ?>',
      WP_TITLE_SEPARATOR: '<?php echo $WP_TITLE_SEPARATOR ?>',
      WP_SOCIAL_ITEMS: '<?php echo str_replace('"', '\"', json_encode($WP_SOCIAL_ITEMS)) ?>',
    }
  </script>
</head>

<body>
  <noscript>
    You cannot run this app without javascript:/
  </noscript>
  <div id="root"></div>
</body>

</html>