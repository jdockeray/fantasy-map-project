import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Settings.css'
import { Field, reduxForm } from 'redux-form' // ES6
import ImageRadio from '../../components/Fields/ImageRadio/ImageRadio'

const landscapes = require('./static/landscapes/landscapes.json')

export class LandscapeForm extends Component {
  static propTypes = {
    // title: PropTypes.string,
  }

  state = {
  }


  render() {
    const {
      match,
    } = this.props

    return (
      <div className="background">
        {
          landscapes[match.params.category].images.map(background =>
            (<Field
              component={ImageRadio}
              type="radio"
              name="landscape"
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
  destroyOnUnmount: false,
})(LandscapeForm)
