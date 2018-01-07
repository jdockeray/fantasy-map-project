import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import { landscapeProps, itemProps } from '../../helpers/propTypes'
import { getMousePos } from '../../helpers/utils'

import './Map.css'

// EDIT MODE: Constants
export const ADD = 'ADD'
export const DELETE = 'DELETE'

class Map extends Component {
  static propTypes = {
    addMapItem: PropTypes.func.isRequired,
    deleteMapItem: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(itemProps),
    editingMode: PropTypes.oneOf([ADD, DELETE]),
    landscape: landscapeProps,
    background: PropTypes.string,
  }

  static defaultProps = {
    background: '',
    editingMode: ADD,
    landscape: false,
    items: []
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

  handleClick = (evt) => {
    const {
      addMapItem,
      deleteMapItem,
      landscape: {
        src,
        width,
        height
      },
    } = this.props

    if (!this.props.landscape) return

    const newMapItem = {
      src,
      x: getMousePos(evt, this.canvas).x,
      y: getMousePos(evt, this.canvas).y,
      width,
      height
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

    const backgroundImage = get(landscape, 'src')

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
            cursor: `url(${backgroundImage}),auto`,
          }}
        />
      </div>
    )
  }
}

export default Map
