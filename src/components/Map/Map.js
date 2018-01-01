import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { get } from 'lodash'
import './Map.css'


class Map extends Component {
  static getMousePos = (canvas, evt) => {
    const rect = canvas.getBoundingClientRect()
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    }
  }

  handleClick = (evt) => {
    const {
      canvas,
      image,
    } = this

    const {
      position,
      elementDimensions,
    } = this.props

    const ctx = canvas.getContext('2d')
    const img = this.image
    ctx.drawImage(img, position.x-canvas.offsetLeft, position.y)
  }

  render() {
    const {
      background,
      landscape,
      position,
    } = this.props

    return (
      <div
        className="mapFrame"

      >
        <canvas
          ref={(c) => { this.canvas = c }}
          width={900}
          height={600}
          id="map"
          onClick={this.handleClick}
          style={{
            backgroundImage: `url(${background})`,
            cursor: `url(${landscape}),auto`,
          }}
        />
        <img
          ref={(i) => { this.image = i }}
          src={landscape}
          className="hidden"
        />
      </div>
    )
  }
}

export default Map
