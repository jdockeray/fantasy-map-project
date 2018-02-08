import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { get } from 'lodash'
import { Field, reduxForm, formValueSelector } from 'redux-form' // ES6
import './Settings.css'
import ImageRadio from '../../components/Fields/ImageRadio/ImageRadio'
import * as editTypes from '../Map/types'
import { changeEditMode } from '../Map/actions'
import FieldCarousel from '../../components/FieldImageCarousel'
import PlusMinus from '../../components/Fields/PlusMinus'
const selector = formValueSelector('settings')
const landscapes = require('./static/landscapes/landscapes.json')
const mapDispatchToProps = dispatch => bindActionCreators({
  changeEditMode,
}, dispatch)

const mapStateToProps = state => ({
  landscapeCurrentValue: selector(state, 'landscape'),
})

export class DrawForm extends Component {
  static propTypes = {
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
      <div>
        <FormGroup>
          <Field
            name="width"
            component={PlusMinus}
            placeholder="First Name"
          />
        </FormGroup>

      </div>
    )
  }
}

export default reduxForm({
  form: 'drawing',
  destroyOnUnmount: false,
})(connect(mapStateToProps, mapDispatchToProps)(DrawForm))
