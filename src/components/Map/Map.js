import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import { fabric } from 'fabric'
import { landscapeProps } from '../../helpers/propTypes'
import { getMousePos } from '../../helpers/utils'
import './Map.css'
import { ADD, DELETE, SELECT } from '../../containers/Map/types'

class Map extends Component {
  static propTypes = {
    // action callbacks
    selectMapItems: PropTypes.func.isRequired,
    addMapItem: PropTypes.func.isRequired,
    deleteMapItems: PropTypes.func.isRequired,

    // state
    map: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      })).isRequired,
    }).isRequired,
    landscape: landscapeProps,
    background: PropTypes.string,
    mapEditMode: PropTypes.shape({
      mode: PropTypes.oneOf([ADD, DELETE]),
    }).isRequired,
  }

  static defaultProps = {
    background: '',
    landscape: false,
  }

  componentDidMount() {
    this.mapCanvas = new fabric.Canvas('map')
    this.mapCanvas.on('mouse:down', (options) => {
      this.handleClick(options.e)
      console.log(options.e.clientX, options.e.clientY)
    })
    this.mapCanvas.on('mouse:over', (evt) => {
      this.mapCanvas.defaultCursor = `url(${this.getMouseCursor()}),auto`
      this.mapCanvas.hoverCursor = `url(${this.getMouseCursor()}),auto`
    })
    this.mapCanvas.defaultCursor = `url(${this.getMouseCursor()}),auto`
    this.mapCanvas.hoverCursor = `url(${this.getMouseCursor()}),auto`
    this.mapCanvas.freeDrawingCursor = `url(${this.getMouseCursor()}),auto`
  }

  getMouseCursor = () => {
    const {
      mapEditMode,
      landscape,
    } = this.props

    switch (mapEditMode.mode) {
      case ADD:
        return get(landscape, 'src')
      case DELETE:
        return '/images/icons/remove.png'
      case SELECT:
        return '/images/icons/hand-pointer.png'
      default:
        return get(landscape, 'src')
    }
  }

  handleAdd = (evt) => {
    if (!this.props.landscape) return

    const {
      landscape: {
        src,
      },
    } = this.props

    fabric.Image.fromURL(src, (img) => {
      const cloneImg = { ...img }
      img.left = getMousePos(evt, this.canvas).x
      img.top = getMousePos(evt, this.canvas).y
      this.mapCanvas.add(img)
    })
  }

  handleDelete = () => {
    const activeObject = this.mapCanvas.getActiveObject()
    const activeGroup = this.mapCanvas.getActiveGroup()
    if (activeObject) {
      this.mapCanvas.remove(activeObject)
    } else if (activeGroup) {
      const objectsInGroup = activeGroup.getObjects()
      this.mapCanvas.discardActiveGroup()
      objectsInGroup.forEach((object) => {
        this.mapCanvas.remove(object)
      })
    }
  }


  handleClick = (evt) => {
    const {
      mapEditMode: {
        mode,
      },
    } = this.props
    // fire action
    if (mode === ADD) this.handleAdd(evt)
    if (mode === DELETE) this.handleDelete(evt)
    // if (mode === SELECT) this.handleSelectMapItem(evt)
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
          width={2000}
          height={2000}
          id="map"
          onClick={this.handleClick}
          style={{
            backgroundImage: `url(${background})`,
          }}
        />
      </div>
    )
  }
}

export default Map
