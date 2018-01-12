import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { App } from '../containers/App'
import { Welcome } from '../components/Welcome'

export const Root = () => (
  <Router>
    <div>
      <div>
        <Route path="/feed" component={App}/>
      </div>
      <div>
        <Route path="/welcome" component={Welcome}/>
      </div>

    </div>
  </Router>
)
