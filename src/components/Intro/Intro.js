import React from 'react'
import {
  Link,
} from 'react-router-dom'

export default function Intro() {
  return (<span>
    <img src="images/deer-stag-buck-antler-head-shield_m1QI6S_L.png" className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to Fantasy Maps Project</h1>
    <p className="App-intro">
      Because real maps are boring
    </p>
    <Link to="/settings/background" className="btn btn-primary btn-lg active">
      Click to get started
    </Link>
  </span>)
}
