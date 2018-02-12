import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get, isEqual } from 'lodash'
import { fabric } from 'fabric'
import { landscapeProps } from '../../helpers/propTypes'
import { getMousePos } from '../../helpers/utils'
import './Map.css'
import { ADD, DELETE, SELECT, DRAW } from '../../containers/Map/types'

class Map extends Component {
  static propTypes = {
    // action callbacks
    selectMapItems: PropTypes.func.isRequired,
    addMapItem: PropTypes.func.isRequired,
    deleteMapItems: PropTypes.func.isRequired,
    landscape: landscapeProps,
    background: PropTypes.string,
    drawing: PropTypes.shape({
      width: PropTypes.number,
    }),
    mapEditMode: PropTypes.shape({
      mode: PropTypes.oneOf([ADD, DELETE, SELECT, DRAW]),
    }).isRequired,
  }

  static defaultProps = {
    background: '',
    landscape: false,
    drawing: {
      width: 1,
    },
  }

  componentDidMount() {
    this.mapCanvas = new fabric.Canvas('map')
    this.mapCanvas.on('mouse:down', (options) => {
      this.handleClick(options.e)
    })

    this.mapCanvas.on('mouse:over', (evt) => {
      this.mapCanvas.defaultCursor = `url(${this.getMouseCursor()}),auto`
      this.mapCanvas.hoverCursor = `url(${this.getMouseCursor()}),auto`
      this.mapCanvas.freeDrawingCursor = `url(${this.getMouseCursor()}),auto`
    })
    this.mapCanvas.defaultCursor = `url(${this.getMouseCursor()}),auto`
    this.mapCanvas.hoverCursor = `url(${this.getMouseCursor()}),auto`
  }

  shouldComponentUpdate({
    drawing: {
      width
    },
    mapEditMode: {
      mode,
    },
  }) {
    if (mode !== this.props.mapEditMode.mode) {
      this.handleEditChange(mode)
    }
    if (width !== this.props.drawing.width) {
      this.handleDraw(this.props)
    }
    return true
  }

  getDrawImage = () => {
    return null
    // NEED TO REFACTOR THIS, VERY SLOW, just RETURN NULL for now
    // const {
    //   drawing,
    // } = this.props
    // const width = (drawing.width < 5 ? 5 : drawing.width) * 2
    // const canvas = document.createElement('canvas')
    // const fabricCanvas = new fabric.Canvas(canvas)
    // canvas.width = width * 2
    // canvas.height = width * 2
    // document.body.appendChild(canvas);
    // const circle = new fabric.Circle({
    //   radius: width, fill: 'black', left: 0, top: 0,
    // })
    // fabricCanvas.add(circle)
    // const dataURL = fabricCanvas.toDataURL('image/png')
    // return dataURL


    // FONT AWESOME STUFF
    // below could keep shows how to get fa and add as canvas on hover
    // const ctx = canvas.getContext('2d')
    // ctx.fillStyle = '#000000'
    // ctx.font = '24px FontAwesome'
    // ctx.textAlign = 'center'
    // ctx.textBaseline = 'middle'
    // ctx.fillText('\uf002', 12, 12)
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
      case DRAW:
        return this.getDrawImage()
        // return '/images/icons/pencil.png'
      default:
        return null
    }
  }

  handleEditChange = (mode) => {
    if (this.mapCanvas) {
      if (mode === ADD) this.handleAdd()
      if (mode === DELETE) this.handleDelete()
      if (mode === DRAW) this.handleDraw(this.props)
      if (mode === SELECT) this.handleSelect()
    }
  }

  handleAdd = (evt) => {
    if (!this.props.landscape) return

    const {
      landscape: {
        src,
      },
    } = this.props
    this.mapCanvas.isDrawingMode = false
    if (!evt) return
    fabric.Image.fromURL(src, (img) => {
      img.left = getMousePos(evt, this.canvas).x
      img.top = getMousePos(evt, this.canvas).y
      this.mapCanvas.add(img)
    })
  }

  handleDelete = () => {
    const activeObject = this.mapCanvas.getActiveObject()
    const activeGroup = this.mapCanvas.getActiveGroup()
    this.mapCanvas.isDrawingMode = false
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

  handleSelect = () => {
    this.mapCanvas.isDrawingMode = false
  }


  handleDraw = ({
    drawing: {
      width,
      mode,
    },
  }) => {
    const options = {
      colour: '#333',
      drawingLineWidth: 0,
      drawingShadowWidth: 0,
      drawingShadowColour: '#333',
    }


    this.mapCanvas.isDrawingMode = true
    this.mapCanvas.freeDrawingBrush.color = options.colour
    if (mode === 'spray') {
      this.mapCanvas.freeDrawingBrush = new fabric.SprayBrush(this.mapCanvas)
    } else {
      this.mapCanvas.freeDrawingBrush = new fabric.PencilBrush(this.mapCanvas)
    }
    this.mapCanvas.freeDrawingBrush.shadow = new fabric.Shadow({
      blur: width,
      offsetX: 0,
      offsetY: 0,
      affectStroke: true,
      color: options.colour,
    })
    this.mapCanvas.freeDrawingBrush.width = width
  }


  handleClick = (evt) => {
    const {
      mapEditMode: {
        mode,
      },
    } = this.props
    // fire action
    if (mode === ADD) this.handleAdd(evt)
    if (mode === DELETE) this.handleDelete()
    if (mode === DRAW) this.handleDraw(this.props)
    if (mode === SELECT) this.handleSelect()
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
