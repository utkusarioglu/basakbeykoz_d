import React from "react";
import "./_app.scss";

import { Provider } from 'react-redux';
import store from "./store";
import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom'

import Header from "../header/Header";
import Credits from "../credits/Credits";
import Body from '../body/Body';
import Spinner from "../spinner/Spinner";
import Footer from '../footer/Footer';
import Nav from "../header/Nav";
import Logo from "../header/Logo";
import Social from '../header/Social';
import Blog from "../blog/Blog";

function App() {
    const blog_slug = process.env.REACT_APP_BLOG_SLUG as string;

    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Spinner />
                    <Header />
                    <div className="App-wideScreenControls">
                        <Logo />
                        <Social />
                        <Nav />
                    </div>
                    <div className="App-scrollingElements">
                        <Switch>
                            <Route 
                                exact 
                                path={"/credits"}>
                                <Credits />
                            </Route>
                            <Route 
                                exact 
                                path={"/" + blog_slug}>
                                <Blog />
                            </Route>
                            <Route exact path="/:slug?">
                                <Body />
                            </Route>
                        </Switch>
                        <Footer />
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
