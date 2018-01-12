
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store.js';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';

// Parent Component that renders ReactDOM
// passes stateless Components store data

// TASKS
//add constructors to classes & bind
//check proj requirements
//implement routes
//clean up code


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
