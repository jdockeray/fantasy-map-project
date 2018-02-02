import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {
  Route,
  Redirect
} from 'react-router-dom'
import './Settings.css'
import BackgroundForm from './Background'
import LandscapeForm from './Landscape'
import Nav from './Nav'
import './Settings.css'

export class Settings extends Component {
  static propTypes = {
    // title: PropTypes.string,
  }

  state = {
  }

  render() {
    return (
      <div className="settings container" id="settings">
        <Route path="/settings/:active/:category?" component={Nav} />
        <Route path="/settings/background" component={BackgroundForm} />
        <Route path="/settings/landscape/:category" component={LandscapeForm} />

        <Route
          exact
          path="/"
          render={() => (
            <Redirect to="/settings/background" />
          )}
        />
        <Route
          exact
          path="/settings/landscape"
          render={() => (
            <Redirect to="/settings/landscape/hills" />
          )}
        />
      </div>
    )
  }
}

export default Settings
