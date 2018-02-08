import React, { Component } from 'react'
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './PlusMinus.css'

class PlusMinus extends Component {
  state = {}
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
