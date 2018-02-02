import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { get } from 'lodash'
import { Carousel } from 'react-bootstrap'
import { Field, reduxForm, formValueSelector } from 'redux-form' // ES6
import './Settings.css'
import ImageRadio from '../../components/Fields/ImageRadio/ImageRadio'
import * as editTypes from '../Map/types'
import { changeEditMode } from '../Map/actions'
import FieldCarousel from '../../components/FieldImageCarousel'

const selector = formValueSelector('settings')
const landscapes = require('./static/landscapes/landscapes.json')

const mapDispatchToProps = dispatch => bindActionCreators({
  changeEditMode,
}, dispatch)

const mapStateToProps = state => ({
  landscapeCurrentValue: selector(state, 'landscape'),
})

export class LandscapeForm extends Component {
  static propTypes = {
    // title: PropTypes.string,
    match: PropTypes.shape({
      params: PropTypes.shape({
        category: PropTypes.string,
      }),
    }).isRequired,
    // state
    landscapeCurrentValue: PropTypes.shape({
      src: PropTypes.string,
    }),
    // actions
    changeEditMode: PropTypes.func.isRequired,
  }

  static defaultProps = {
    landscapeCurrentValue: undefined,
  }

  state = {
  }

  handleFieldChange = () => {
    this.props.changeEditMode(editTypes.ADD)
  }
  render() {
    const {
      match,
      landscapeCurrentValue,
    } = this.props

    return (
      <FieldCarousel
        numberPerSlide={15}
        fields={landscapes[match.params.category].images.map(background =>
        (
          <Field
            component={ImageRadio}
            type="radio"
            name="landscape"
            value={background.src}
            onChange={this.handleFieldChange}
            src={background.src}
            key={background.src}
            checked={get(landscapeCurrentValue, 'src') === background.src}
          />
        ))}
      />
    )
  }
}

export default reduxForm({
  form: 'settings',
  destroyOnUnmount: false,
})(connect(mapStateToProps, mapDispatchToProps)(LandscapeForm))
