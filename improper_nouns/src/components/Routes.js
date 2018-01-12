import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Welcome = Loadable({
  loader: () => import('./routes/Home'),
  loading: Loading,
});

const Feed = Loadable({
  loader: () => import('../containers/App'),
  loading: Loading,
});

// const About = Loadable({
//   loader: () => import('./routes/Feed'),
//   loading: Loading,
// });

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/welcome" component={Welcome}/>
      <Route path="/feed" component={Feed}/>
      // <Route path="/about" component={About}/>

    </Switch>
  </Router>
);
