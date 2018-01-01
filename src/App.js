import React from 'react'
import { Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import Intro from './components/Intro/Intro'
import Settings from './containers/Settings'
import Map from './containers/Map'


import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header clearfix">
          <Route exact path="/" component={ Intro } />
          <Route path="/settings" component={ Settings }/>
        </header>
        <section class="main">
          <Map />
        </section>
      </div>
    </Router>
  )
}

export default App
