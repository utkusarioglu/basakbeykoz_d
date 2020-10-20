import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BlogRoute from '../../routes/Blog.route';
import CreditsRoute from '../../routes/Credits.route';
import SluggedRoute from '../../routes/Slugged.route';
import FourOFourRoute from '../../routes/404.route';

const AppRoutes = () => {
  const { REACT_APP_BLOG_SLUG } = process.env;
  return (
    <Switch>
      <Route {...{ exact: true, path: '/credits' }}>
        <CreditsRoute />
      </Route>
      <Route {...{ exact: true, path: '/' + REACT_APP_BLOG_SLUG }}>
        <BlogRoute />
      </Route>
      <Route {...{ exact: true, path: '/404' }}>
        <FourOFourRoute />
      </Route>
      <Route {...{ exact: true, path: '/:slug?' }}>
        <SluggedRoute />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
