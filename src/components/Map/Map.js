import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Map.css'

class Map extends Component {
  static propTypes = {
    addMapItem: PropTypes.func.isRequired,
    position: PropTypes.object.isRequired,
    background: PropTypes.string.isRequired,
    landscape: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
  }

  componentDidUpdate(prevProps) {
    const {
      items,
    } = this.props

    if (prevProps.items.length !== items.length) {
      const ctx = this.canvas.getContext('2d')

      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

      items.forEach((item) => {
        const baseImage = new Image()
        baseImage.src = item.src
        ctx.drawImage(baseImage, item.x, item.y)
      })
    }
  }

  handleClick = () => {
    const {
      position: {
        x,
        y,
      },
      addMapItem,
      landscape,
    } = this.props

    if (!landscape) return

    const newMapItem = {
      src: landscape,
      x: x - this.canvas.offsetLeft,
      y,
    }

    // fire action
    addMapItem(newMapItem)
  }

  render() {
    const {
      background,
      landscape,
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
      </div>
    )
  }
}

export default Map
