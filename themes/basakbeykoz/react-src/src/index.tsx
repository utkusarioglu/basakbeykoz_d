import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import ReactGA from 'react-ga';
import * as serviceWorker from './serviceWorker';
import AppFeature from './features/app/App.feature';
import '@csstools/normalize.css';
import './index.scss';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import './common/styles/_scrollbar.scss';
import { Env } from './common/@types-common';

const { REACT_APP_GA_TRACKING_ID } = process.env as Env;
ReactGA.initialize(REACT_APP_GA_TRACKING_ID, { debug: false });

ReactDOM.render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <AppFeature />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
