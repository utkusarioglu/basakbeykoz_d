import React from 'react'
import { Route, Switch, } from 'react-router-dom'

import BlogRoute from "../../routes/BlogRoute";
import CreditsRoute from "../../routes/CreditsRoute";
import BodyRoute from "../../routes/BodyRoute";

export const AppRoutes = () => {
    const {REACT_APP_BLOG_SLUG} = process.env;
    return (
        <Switch>
            <Route 
                exact 
                path={"/credits"}>
                <CreditsRoute />
            </Route>
            <Route 
                exact 
                path={"/" + REACT_APP_BLOG_SLUG}>
                <BlogRoute />
            </Route>
            <Route exact path="/:slug?">
                <BodyRoute />
            </Route>
        </Switch>
    )
}

export default AppRoutes;