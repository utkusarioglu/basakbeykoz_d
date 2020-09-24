import React from "react";
import 'overlayscrollbars/css/OverlayScrollbars.css';
import "./_app.scss";
import './_scrollbar.scss';

import { Provider } from 'react-redux';
import store from "../../store/store";
import { BrowserRouter as Router } from 'react-router-dom'

import Header from "../header/Header";
import Spinner from "../../features/spinner/Spinner";
import AppBody from './AppBody';


import Logo from "../header/Logo";
import Social from '../social/Social';
import NavFixedView from "../nav/NavFixedView";

function App() {


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
                    <AppBody />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
