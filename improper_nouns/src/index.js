import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const Feed = () => <h1>Feed</h1>;

const Add = () => <h1>Add</h1>;

const View = () => <h1>Hey Hey</h1>;

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/view" component={View} />
      </div>
    </Router>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
