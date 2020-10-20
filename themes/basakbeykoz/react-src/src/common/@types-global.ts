declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_UPLOADS_DIR: string;
      REACT_APP_HOME_SLUG: string;
      REACT_APP_BLOG_SLUG: string;
      REACT_APP_REST_ENDPOINT: string;
      REACT_APP_NAME: string;
      REACT_APP_SEPARATOR: string;
      REACT_APP_GA_TRACKING_ID: string;
    }
  }
}

export {};
