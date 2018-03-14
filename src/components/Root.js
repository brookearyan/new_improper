import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { App } from '../containers/App'
import { Welcome } from '../components/Welcome'
import { Modal } from './Modal'

export const Root = () => (
  <Router>
    <div>
      <div>
        <Route path="/" component={App}/>
      </div>

      <div>
        <Route path="/add" component={Modal}/>
      </div>
    </div>
  </Router>
)
