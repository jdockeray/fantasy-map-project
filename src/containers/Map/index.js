import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { get } from 'lodash'
import ReactCursorPosition from 'react-cursor-position';
import Map from '../../components/Map/Map'

const mapStateToProps = state => ({
  background: get(state, 'form.settings.values.background') || null,
  landscape: get(state, 'form.settings.values.landscape') || null,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  // myAction
}, dispatch)

class MapWrapper extends Component {
  state={}

  render() {
    return (
        <ReactCursorPosition className="MapWrapper">
          <Map {...this.props} />
        </ReactCursorPosition>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper)
