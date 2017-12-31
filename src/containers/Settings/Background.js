import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Settings.css'
import { Field, reduxForm } from 'redux-form' // ES6
import ImageRadio from '../../components/Fields/BackgroundImageRadio/BackgroundImageRadio'

const backgrounds = require('./static/backgrounds/backgrounds.json')

export class BackgroundForm extends Component {
  static propTypes = {
    // title: PropTypes.string,
  }

  state = {
  }

  render() {
    return (
      <div className="background">
        {
          backgrounds.images.map(background =>
            (<Field
              component={ImageRadio}
              type="radio"
              name="background"
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
  destroyOnUnmount: false
})(BackgroundForm)
