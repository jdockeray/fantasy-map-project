import React, { Component } from 'react'
import ItemGenerator from './components/itemGenerator/itemGenerator'
import Grid from './components/grid/Grid'

import './App.css'

class App extends Component {
  state = {
    active: 1,
  }

  onClick = (evt) => {
    this.setState({
      active: this.state.active + 1,
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="images/deer-stag-buck-antler-head-shield_m1QI6S_L.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fantasy Maps Project</h1>
          <p className="App-intro">
            To get started, edit and save to reload.
          </p>

        </header>

        {
          <Grid />
        }
      </div>
    )
  }
}

export default App
