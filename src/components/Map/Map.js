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
    deleteMapItems: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(itemProps),
    editingMode: PropTypes.oneOf([ADD, DELETE]),
    landscape: landscapeProps,
    background: PropTypes.string,
  }

  static defaultProps = {
    background: '',
    editingMode: ADD,
    landscape: false,
    items: [],
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

  getMouseCursor = () => {
    const {
      editingMode,
      landscape,
    } = this.props

    switch (editingMode) {
      case ADD:
        return get(landscape, 'src')
      case DELETE:
        return '/images/icons/remove.png'
      default:
        return undefined
    }
  }

  handleAddMapItem = (evt) => {
    if (!this.props.landscape) return

    const {
      addMapItem,
      landscape: {
        src,
        width,
        height,
      },
    } = this.props


    const newMapItem = {
      src,
      x: getMousePos(evt, this.canvas).x,
      y: getMousePos(evt, this.canvas).y,
      width,
      height,
    }

    // fire action
    addMapItem(newMapItem)
  }

  handleDeleteMapItem = (evt) => {
    const {
      deleteMapItems,
      items,
    } = this.props


    const mousePosition = {
      x: getMousePos(evt, this.canvas).x,
      y: getMousePos(evt, this.canvas).y,
    }

    // fire action
    deleteMapItems(mousePosition, items)
  }

  handleClick = (evt) => {
    const {
      editingMode
    } = this.props
    // fire action
    if (editingMode === ADD) this.handleAddMapItem(evt)
    if (editingMode === DELETE) this.handleDeleteMapItem(evt)
  }


  render() {
    const {
      background,
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
            cursor: `url(${this.getMouseCursor()}),auto`,
          }}
        />
      </div>
    )
  }
}

export default Map
