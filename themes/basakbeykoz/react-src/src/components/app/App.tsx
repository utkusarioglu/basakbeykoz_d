import React from "react";
import 'overlayscrollbars/css/OverlayScrollbars.css';
import "./_app.scss";
import './_scrollbar.scss';

import { Provider } from 'react-redux';
import store from "../../store/store";
import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom'

import Header from "../header/Header";
import Spinner from "../../features/spinner/Spinner";
import Footer from '../footer/Footer';

import Logo from "../header/Logo";
import Social from '../social/Social';
import NavFixedView from "../nav/NavFixedView";

import BlogRoute from "../../routes/BlogRoute";
import CreditsRoute from "../../routes/CreditsRoute";
import BodyRoute from "../../routes/BodyRoute";


import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

function App() {
    const blog_slug = process.env.REACT_APP_BLOG_SLUG as string;

    return (
        <Provider store={store}>
            <Router>

                <div className="App">
                    <Spinner />
                    <NavFixedView />
                    <Header />
                    <div className="App-wideScreenControls">
                        <Logo />
                        <Social />
                    </div>
                    <OverlayScrollbarsComponent
                        className="App-scrollWindow"
                        options={{
                            // resize: 'vertical',
                            paddingAbsolute: true,
                            scrollbars: {
                                autoHide: 's'
                            }
                        }}>
                        <div className="App-scrollingElements">
                            <Switch>
                                <Route 
                                    exact 
                                    path={"/credits"}>
                                    <CreditsRoute />
                                </Route>
                                <Route 
                                    exact 
                                    path={"/" + blog_slug}>
                                    <BlogRoute />
                                </Route>
                                <Route exact path="/:slug?">
                                    <BodyRoute />
                                </Route>
                            </Switch>
                            <Footer />
                        </div>
                    </OverlayScrollbarsComponent>

                </div>
            </Router>
        </Provider>
    );
}

export default App;
