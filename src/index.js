import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'pages/App';
import store from 'ducks/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// start msw service worker during development
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('mocks/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// https://mswjs.io/docs/getting-started/integrate/browser#troubleshooting
// comment out next line for msw service worker to avoid breaking requests interception
// serviceWorker.unregister();
