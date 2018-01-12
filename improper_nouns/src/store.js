
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import memes from './reducers/memes';
import memeFormData from './reducers/memeFormData';

// thunk: allows us to return a function inside of our action creator -->
// receives the store's dispatch function -->
// with that we dispatch multiple actions -->
// one to place the state in a loading state
// & another to update our store with the returned data

const reducers = combineReducers({
  memes,
  memeFormData
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);
