import React from 'react'
import { Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import ItemGenerator from './components/ItemGenerator/ItemGenerator'
import Grid from './components/Grid/Grid'
import Intro from './components/Intro/Intro'

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header clearfix">
          <Route exact path="/" component={ Intro } />
          <Route path="" />
        </header>
      </div>
    </Router>
  )
}

export default App
