import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { noop } from 'lodash'
import PropTypes from 'prop-types'

export const ControlPropTypes = {
  callback: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
}

export default function Control({
  callback = noop,
  items = [],
}) {
  return (
    <ButtonGroup>
      {
        items.map(({ label, text }) => (
          <Button
            key={label}
            value={label}
            onClick={callback}
          >
            { text }
          </Button>))
      }
    </ButtonGroup>)
}

Control.propTypes = ControlPropTypes
