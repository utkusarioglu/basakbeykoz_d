import React from "react";

import { Provider } from 'react-redux';
import store from "./store";

import Header from "../header/Header";
import Body from '../body/Body';
import Spinner from "../app/Spinner";



function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Spinner />
                <Header />
                <Body />
            </div>
        </Provider>
    );
}

export default App;
