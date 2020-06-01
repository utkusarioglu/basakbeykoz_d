import React from "react";
import CSS from "csstype";

import { Provider } from 'react-redux';
import store from "./store";

import Header from "../header/Header";
import Body from '../body/Body';
import Spinner from "../app/Spinner";
import Footer from '../footer/Footer';
import Nav from "../header/Nav";
import Social from '../header/Social';

const styles: {[className: string]: CSS.Properties} = {
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
            <div className="App" style={styles.app}>
                <Spinner />
                <Header />
                <Social />
                <Nav />
                <div
                    style={styles.scrollingElements}>
                    <Body />
                    <Footer />
                </div>
            </div>
        </Provider>
    );
}

export default App;
