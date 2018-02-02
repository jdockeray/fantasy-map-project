import classNames from 'classnames'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ImageRadio.css'

export default class MyCustomInput extends Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
  }

  state={
  }

  render() {
    const {
      meta,
      src,
      checked,
      input: { onChange },
    } = this.props
    return (
      <div
        className={classNames(
          'imageRadio',
          {
          checked,
        })}
      >


        <input id="image"
          type="image"
          {...this.props.input}

          alt="A map icon"
          src={src}
          ref={(image) => { this.image = image }}
          onClick={() => {
            onChange({
              src,
              width: this.image.width,
              height: this.image.height,
            })
          }}
        />
      </div>

    )
  }
}
