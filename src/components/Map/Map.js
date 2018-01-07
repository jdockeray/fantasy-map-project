import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Map.css'

// EDIT MODE: Constants
const ADD = 'ADD'
const DELETE = 'DELETE'

class Map extends Component {
  static propTypes = {
    addMapItem: PropTypes.func.isRequired,
    deleteMapItem: PropTypes.func.isRequired,
    position: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    editingMode: PropTypes.oneOf([ADD, DELETE]),
    landscape: PropTypes.string,
    background: PropTypes.string,
  }

  static defaultProps = {
    background: '',
    editingMode: ADD,
  }

  state = {
    images: {},
  }

  componentDidUpdate(prevProps) {
    const {
      items,
    } = this.props

    if (prevProps.items.length !== items.length) {
      const ctx = this.canvas.getContext('2d')

      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

      items.forEach((item) => {
        if (this.state.images[item.src]) {
          ctx.drawImage(this.state.images[item.src], item.x, item.y)
        } else {
          const baseImage = new Image()
          baseImage.src = item.src
          baseImage.onload = () => {
            ctx.drawImage(baseImage, item.x, item.y)
            this.setState({
              ...this.state,
              images: {
                ...this.state.images,
                [item.src]: baseImage,
              },
            })
          }
        }
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
      deleteMapItem,
      landscape,
    } = this.props

    if (!landscape) return

    const newMapItem = {
      src: landscape,
      x: x - this.canvas.offsetLeft,
      y,
    }

    // fire action
    if (ADD) addMapItem(newMapItem)
    if (DELETE) deleteMapItem(newMapItem)
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
