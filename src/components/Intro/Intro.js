import React from 'react'
import {
  Link,
} from 'react-router-dom'

export default function Intro() {
  return (<span>
    <img src="images/deer-stag-buck-antler-head-shield_m1QI6S_L.png" className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to Fantasy Maps Project</h1>
    <p className="App-intro">
      To get started, edit and save to reload.
    </p>
    <Link to="/settings" className="btn btn-primary btn-lg active">
      Lets get started
    </Link>
  </span>)
}
