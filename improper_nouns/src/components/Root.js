import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { App } from '../containers/App'
import { Welcome } from '../components/Welcome'
import { Modal } from './Modal'

export const Root = () => (
  <Router>
      <div>
        <Route path="/" component={App}/>
      </div>
  </Router>
)

//above connects welcome modal
