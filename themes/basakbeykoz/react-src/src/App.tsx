import React from "react";
import "./App.css";

import { Provider } from 'react-redux';
import store from "./store";

import Header from "./components/Header";
import Body from './components/Body'




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
