import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { get } from 'lodash'
import './Map.css'
const mapStateToProps = state => ({
  background: get(state, 'form.settings.values.background') || null,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  // myAction
}, dispatch)

class Map extends Component {
  componentDidMount() {
    const {
      canvas,
      image,
    } = this
    const ctx = canvas.getContext('2d')
    // const img = this.refs.image
    // img.onload = () => {
    //   ctx.drawImage(img, 0, 0)
    //   ctx.font = '40px Courier'
    //   ctx.fillText(this.props.text, 210, 75)
    // }
  }
  render() {
    const {
      background
    } = this.props

    return (
      <div>
        <canvas
          ref={(c) => { this.canvas = c }}
          width={640}
          height={425}
          id="map"
          style={{
            backgroundImage: `url(${background})`,
          }}
        />
        {/* <img ref="image" src={cheese} className="hidden" /> */}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
