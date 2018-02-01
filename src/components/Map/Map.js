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

  state = {
    images: {},
  }

  componentDidMount() {
    this.mapCanvas = new fabric.Canvas('map')
    this.mapCanvas.on('mouse:down', (options) => {
      this.handleClick(options.e)
      console.log(options.e.clientX, options.e.clientY)
    })
    this.mapCanvas.hoverCursor = `url(${this.getMouseCursor()}),auto`
  }

  componentDidUpdate() {
    const {
      map: {
        items,
      },
    } = this.props

    // create a rectangle object

    // const ctx = this.canvas.getContext('2d')
    // ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    //
    // items.forEach((item) => {
    //   if (this.state.images[item.src]) {
    //     this.drawItemToCanvas(this.state.images[item.src], item)
    //   } else {
    //       const baseImage = new Image() // eslint-disable-line
    //     baseImage.src = item.src
    //     baseImage.onload = () => {
    //       this.drawItemToCanvas(baseImage, item)
    //       this.setState({
    //         ...this.state,
    //         images: {
    //           ...this.state.images,
    //           [item.src]: baseImage,
    //         },
    //       })
    //     }
    //   }
    // })
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
        return undefined
    }
  }

  drawItemToCanvas(image, item) {
    const ctx = this.canvas.getContext('2d')

    if (get(item, 'selected')) {
      ctx.globalAlpha = 0.5
      ctx.drawImage(image, item.x, item.y)
      ctx.globalAlpha = 1

      return
    }
    ctx.drawImage(image, item.x, item.y)
  }

  handleAddMapItem = (evt) => {
    if (!this.props.landscape) return

    const {
      addMapItem,
      map: {
        items,
      },
      landscape: {
        src,
        width,
        height,
      },
    } = this.props


    fabric.Image.fromURL(src, (img) => {
      img.left = getMousePos(evt, this.canvas).x
      img.top = getMousePos(evt, this.canvas).y
      this.mapCanvas.add(img)
      this.mapCanvas.hoverCursor = `url(${this.getMouseCursor()}),auto`

    })
    // const newMapItem = {
    //   src,
    //   x: getMousePos(evt, this.canvas).x,
    //   y: getMousePos(evt, this.canvas).y,
    //   width,
    //   height,
    // }
    //
    // // fire action
    // addMapItem(newMapItem, items)
  }

  handleDeleteMapItem = (evt) => {
    const {
      deleteMapItems,
      map: {
        items,
      },
    } = this.props

    const mousePosition = {
      x: getMousePos(evt, this.canvas).x,
      y: getMousePos(evt, this.canvas).y,
    }

    // fire action
    deleteMapItems(mousePosition, items)
  }

  handleSelectMapItem = (evt) => {
    const {
      selectMapItems,
      map: {
        items,
      },
    } = this.props

    const mousePosition = {
      x: getMousePos(evt, this.canvas).x,
      y: getMousePos(evt, this.canvas).y,
    }

    selectMapItems(mousePosition, items)
  }

  handleClick = (evt) => {
    const {
      mapEditMode: {
        mode,
      },
    } = this.props
    // fire action
    if (mode === ADD) this.handleAddMapItem(evt)
    if (mode === DELETE) this.handleDeleteMapItem(evt)
    if (mode === SELECT) this.handleSelectMapItem(evt)
  }


  render() {
    const {
      background,
    } = this.props

    return (
      <div
        className="mapFrame"
        style={{
          cursor: `url(${this.getMouseCursor()}),auto`,
        }}
      >
        <canvas
          ref={(c) => { this.canvas = c }}
          width={900}
          height={600}
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
