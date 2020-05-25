import React from "react";

import { Provider } from 'react-redux';
import store from "./store";

import Header from "../header/Header";
import Body from '../body/Body'




function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <Body />
            </div>
        </Provider>
    );
}

export default App;
