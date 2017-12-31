import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {
  Route,
  Redirect
} from 'react-router-dom'
import './Settings.css'
import BackgroundForm from './Background'
import Nav from './Nav'


export class Settings extends Component {
  static propTypes = {
    // title: PropTypes.string,
  }

  state = {
  }

  render() {
    return (
      <div className="settings container">
        <Route path="/settings/:active" component={Nav} />
        <Route path="/settings/background" component={BackgroundForm} />

        <Route
          exact
          path="/"
          render={() => (
            <Redirect to="/settings/background" />
          )}
        />
      </div>
    )
  }
}

export default Settings
