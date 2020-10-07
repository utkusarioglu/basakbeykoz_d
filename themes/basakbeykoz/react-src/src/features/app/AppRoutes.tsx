import React from "react";
import { Route, Switch } from "react-router-dom";
import { Env } from "../../common/@types-common";

import BlogRoute from "../../routes/BlogRoute";
import CreditsRoute from "../../routes/CreditsRoute";
import SluggedRoute from "../../routes/SluggedRoute";
import FourOFourRoute from "../../routes/404Route";

export const AppRoutes = () => {
  const { REACT_APP_BLOG_SLUG } = process.env as Env;
  return (
    <Switch>
      <Route exact path={"/credits"}>
        <CreditsRoute />
      </Route>
      <Route exact path={"/" + REACT_APP_BLOG_SLUG}>
        <BlogRoute />
      </Route>
      <Route exact path="/404">
        <FourOFourRoute />
      </Route>
      <Route exact path="/:slug?">
        <SluggedRoute />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
