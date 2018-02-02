import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { noop } from 'lodash'
import PropTypes from 'prop-types'
import { If, Then, Else } from 'react-if'

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
    <ButtonGroup className="mapControls">
      {
        items.map(({ label, text, active }) => (


          <If condition={active}>
            <Then>
              <Button
                key={label}
                value={label}
                onClick={callback}
                bsStyle={active && 'primary'}
              >
                { text }
              </Button>
            </Then>
            <Else>{() => (
              <Button
                key={label}
                value={label}
                onClick={callback}
              >
                { text }
              </Button>)
            }
            </Else>
          </If>
        ))
      }
    </ButtonGroup>)
}

Control.propTypes = ControlPropTypes
