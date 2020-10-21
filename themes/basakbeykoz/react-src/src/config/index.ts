const {
  REACT_APP_UPLOADS_DIR,
  REACT_APP_HOME_SLUG,
  REACT_APP_BLOG_SLUG,
  REACT_APP_REST_ENDPOINT,
  REACT_APP_REST_TIMEOUT,
  REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID,
  NODE_ENV,
} = process.env;

export default {
  NODE_ENV,
  UPLOADS_DIR: REACT_APP_UPLOADS_DIR,
  HOME_SLUG: REACT_APP_HOME_SLUG,
  BLOG_SLUG: REACT_APP_BLOG_SLUG,
  REST_ENDPOINT: REACT_APP_REST_ENDPOINT,
  REST_TIMEOUT: REACT_APP_REST_TIMEOUT,
  GOOGLE_ANALYTICS_TRACKING_ID: REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID,

  /* 
    Next variables are provided by index.php
    They may come from wp loop or through some other mechanism

    !Important
    Don't forget to supply global counterparts for these values to jest
    in the file "src/setupTests.js"
  */
  APP_NAME: window.config?.WP_PAGE_TITLE || 'AppName',
  APP_TAGLINE: window.config?.WP_PAGE_TAGLINE || 'Tagline',
  APP_SEPARATOR: window.config?.WP_TITLE_SEPARATOR || ' - ',
};
