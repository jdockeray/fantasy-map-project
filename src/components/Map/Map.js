import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import './Map.css'
import PropTypes from 'prop-types'

class Map extends Component {
  static propTypes = {
    addMapItem: PropTypes.func.isRequired,
    position: PropTypes.object.isRequired,
    background: PropTypes.string.isRequired,
    landscape: PropTypes.string.isRequired,
  }

  handleClick = (evt) => {
    const {
      canvas,
      image,
    } = this

    const {
      position: {
        x,
        y,
      },
      elementDimensions,
      addMapItem,
      landscape
    } = this.props

    const newMapItem = {
      src: landscape,
      x,
      y,
    }

    // fire action
    addMapItem(newMapItem)

    // / add to canvas
    const ctx = canvas.getContext('2d')
    const img = this.image
    ctx.drawImage(img, x - canvas.offsetLeft, y)
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
