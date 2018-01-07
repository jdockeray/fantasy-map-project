import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Settings.css'
import { Field, reduxForm, formValueSelector } from 'redux-form' // ES6
import ImageRadio from '../../components/Fields/ImageRadio/ImageRadio'
import { connect } from 'react-redux'
import { get } from 'lodash'
const selector = formValueSelector('settings')
const landscapes = require('./static/landscapes/landscapes.json')

const mapStateToProps = state => ({
  landscapeCurrentValue: selector(state, 'landscape'),
})

export class LandscapeForm extends Component {
  static propTypes = {
    // title: PropTypes.string,
  }

  state = {
  }


  render() {
    const {
      match,
      landscapeCurrentValue
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
              key={background.src}
              checked={get(landscapeCurrentValue, 'src') === background.src}
            />))
        }
      </div>
    )
  }
}

export default reduxForm({
  form: 'settings',
  destroyOnUnmount: false,
})(connect(mapStateToProps, null)(LandscapeForm))
