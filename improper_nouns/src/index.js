
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store.js'
import registerServiceWorker from './registerServiceWorker'
import { Root } from './components/Root'

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

// Parent Component that renders ReactDOM
// passes stateless Components store data

// TASKS
//-add constructors to classes & bind
//-check proj requirements
//-implement routes
//-clean up code
//-like button?
//-separate presentational & func Components
//-check for object literals, non bound handlers,
////pieces doing too many things


// COMP VS CONTAINER________________________________
// Component is part of the React API.
// A Component is a class or function that describes
// part of a React UI.
// //
// Container is an informal term for a React component
 // that is connect-ed to a redux store. Containers
 // receive Redux state updates and dispatch actions,
 // and they usually don't render DOM elements; they
 // delegate rendering to presentational child components.

//NOTES__________________________________________
// Here's the basic idea behind it: if a component
// has to have state, make calculations based on
// props, or manage any other complex logic, then
// that component shouldn't also have to render
// HTML-like JSX.
//
// Instead of rendering HTML-like JSX, the component
// should render another component. It should be
// that component's job to render HTML-like JSX.
