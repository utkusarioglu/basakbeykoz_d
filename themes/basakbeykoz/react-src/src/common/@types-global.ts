declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_UPLOADS_DIR: string;
      REACT_APP_HOME_SLUG: string;
      REACT_APP_BLOG_SLUG: string;
      REACT_APP_REST_ENDPOINT: string;
      REACT_APP_REST_TIMEOUT: string;
      REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID: string;
    }
  }
  interface Window {
    config: {
      WP_PAGE_TITLE: string;
      WP_PAGE_TAGLINE: string;
      WP_TITLE_SEPARATOR: string;
    };
  }
}

export {};
