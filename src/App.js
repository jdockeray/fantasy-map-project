import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Intro from './components/Intro/Intro'
import { Settings } from './containers/Settings'
import Map from './containers/Map'


import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header clearfix">
          <Route exact path="/" component={Intro} />
          <Route path="/settings" component={Settings} />
        </header>
        <section className="main">
          <Route path="/settings" component={Map} />

        </section>
      </div>
    </Router>
  )
}

export default App
