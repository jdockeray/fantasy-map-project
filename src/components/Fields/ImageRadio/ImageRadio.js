import classNames from 'classnames'
import React, { Component } from 'react'
import './ImageRadio.css'

export default class MyCustomInput extends Component {
  state={
  }

  render() {
    const { input, meta, src } = this.props
    const {
      checked,
    } = input
    return (
      <label className="imageRadio">
        <div
          className={classNames({
            checked,
          })}
        >
          <img src={src} />
        </div>
        <input
          {...input}
          type="radio"
        />
      </label>
    )
  }
}
