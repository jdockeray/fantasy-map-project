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
      <label className="imageRadio">
        <div
          className={classNames({
            checked,
          })}
        >
          <img
            src={src}
            alt="A map icon"
            ref={(image) => { this.image = image }}
          />
        </div>
        <input
          {...this.props.input}
          type="radio"
          onChange={() => {
            onChange({
              src,
              width: this.image.width,
              height: this.image.height,
            })
          }}
        />
      </label>
    )
  }
}
