import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Settings.css'
import { Field, reduxForm } from 'redux-form' // ES6
import ImageRadio from '../../components/Fields/ImageRadio'

const backgrounds = require('./static/backgrounds/backgrounds.json')

export class Settings extends Component {
  static propTypes = {
    // title: PropTypes.string,
  }

  state = {
  }

  render() {
    return (
      <div className="homeSettings">
        {
          backgrounds.images.map(background =>
            (<Field
              component={ImageRadio}
              type="radio"
              name='background'
              value={background.src}
              src={background.src}
            />))
        }
      </div>
    )
  }
}

export default reduxForm({
  form: 'settings',
})(Settings)
