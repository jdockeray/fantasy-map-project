import classNames from 'classnames'
import React, { Component } from 'react'
import './ImageRadio.css'

export default class MyCustomInput extends Component {
  state={
  }
  // onFocus = (event) => {
  //
  //   return this.props.onFocus ? this.props.onFocus(event) : null
  // }
  render() {
    const { input, meta, src } = this.props
    const {
      checked,
    } = input
    return (
      <label className="imageRadio">
        <div
          className={classNames(
            'backgroundBlock',
            {
              checked,
            },
          )}
          style={{
            backgroundImage: `url(${src})`,
          }}
        />
        <input
          {...input}
          type="radio"
        />
      </label>
    )
  }
}
