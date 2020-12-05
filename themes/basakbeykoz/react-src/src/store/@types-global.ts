declare global {
  namespace NodeJS {
    /**
     * Custom environment variables used by the app
     */
    interface ProcessEnv {
      REACT_APP_UPLOADS_DIR: string;
      REACT_APP_HOME_SLUG: string;
      REACT_APP_BLOG_SLUG: string;
      REACT_APP_REST_ENDPOINT: string;
      REACT_APP_REST_TIMEOUT: string;
      REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID: string;
      GENERATE_SOURCEMAP: boolean;
    }
  }

  /**
   * Custom properties received from public/index.php
   * Note that development and production values of these properties are
   * populated by public/index.php while test values are populated by jest
   * in src/setupTest.js
   */
  interface Window {
    config: {
      WP_PAGE_TITLE: string;
      WP_PAGE_TAGLINE: string;
      WP_TITLE_SEPARATOR: string;
      WP_SOCIAL_ITEMS: string;
    };
  }
}

export {};
