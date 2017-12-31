import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Settings.css'
import { Field, reduxForm } from 'redux-form' // ES6
import ImageRadio from '../../components/Fields/BackgroundImageRadio/BackgroundImageRadio'

const landscapes = require('./static/landscapes/landscapes.json')

export class LandscapeForm extends Component {
  static propTypes = {
    // title: PropTypes.string,
  }

  state = {
    categories: {
      images: [],
    },
  }

  componentWillMount = () => {
    const {
      match,
    } = this.props
    this.setState({
      categories: landscapes[match.params.category],
    })
  }

  render() {
    const {
      categories,
    } = this.state

    return (
      <div className="background">
        {
          categories.images.map(background =>
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
