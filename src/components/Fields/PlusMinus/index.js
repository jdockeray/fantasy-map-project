import React, { Component } from 'react'
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './PlusMinus.css'


class PlusMinus extends Component {
  state = {}
  componentDidMount() {
    const {
      input: {
        value,
        onChange,
      },
    } = this.props

    if (!value || value < 1) this.props.input.onChange(1)
  }

  componentDidUpdate() {
    const {
      input: {
        value,
        onChange,
      },
    } = this.props

    if (!value || value < 1) this.props.input.onChange(1)
  }

  render() {
    const {
      input: {
        value,
        onChange,
      },
    } = this.props

    return (
      <FormGroup>
        <Button onClick={() => onChange(parseInt(value || 0) + 1)}><FontAwesome name="plus" /></Button>
        <Button onClick={() => onChange(parseInt(value || 0) - 1)}><FontAwesome name="minus" /></Button>
        <span>current value: {value}</span>

      </FormGroup>
    )
  }
}
export default PlusMinus
