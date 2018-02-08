import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import {
  Route,
  Redirect,
} from 'react-router-dom'
import CollapsibleColumn from '../../components/CollapsibleColumn'

import './Settings.css'
import BackgroundForm from './Background'
import LandscapeForm from './Landscape'
import DrawForm from './Draw'
import Nav from './Nav'

export class Settings extends Component {
  static propTypes = {
    // title: PropTypes.string,
  }

  state = {
  }

  render() {
    return (
      <CollapsibleColumn>
        <div className="settings" id="settings">
          <Route path="/settings/:active/:category?" component={Nav} />
          <Route path="/settings/background" component={BackgroundForm} />
          <Route path="/settings/landscape/:category" component={LandscapeForm} />
          <Route path="/settings/draw" component={DrawForm} />


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
      </CollapsibleColumn>
    )
  }
}

export default Settings
