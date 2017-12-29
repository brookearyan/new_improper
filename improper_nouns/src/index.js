
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import './index.css';

// Parent Component that renders ReactDOM
// passes stateless Components store data
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
