import React from "react";
import { CSSStyles } from "./@types-app";

import { Provider } from 'react-redux';
import store from "./store";
import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom'


import Header from "../header/Header";
import Body from '../body/Body';
import Spinner from "../app/Spinner";
import Footer from '../footer/Footer';
import Nav from "../header/Nav";
import Social from '../header/Social';
import Blog from "../blog/Blog";

const styles: CSSStyles = {
    app: {
        overflow: 'hidden',
        // height: "100vh",
    },
    scrollingElements: {
        display: "grid",
        gridTemplateRows: "auto min-content",
        minHeight: "100vh",
        position: "relative",
    }
}

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div 
                    className="App" 
                    style={styles.app}
                    >
                    <Spinner />
                    <Header />
                    <Social />
                    <Nav />
                    <div
                        style={styles.scrollingElements}
                        >
                        <Switch>
                            <Route 
                                exact 
                                path={"/" + process.env.REACT_APP_BLOG_SLUG}>
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
