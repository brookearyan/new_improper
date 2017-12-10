import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import Add from './Add';
import View from './View';

import registerServiceWorker from './registerServiceWorker';


const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/add" render={Add} />
        <Route exact path="/view" render={View} />
      </div>
    </Router>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
