import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { get } from 'lodash'
import ReactCursorPosition from 'react-cursor-position'
import Map from '../../components/Map/Map'
import { addMapItem } from './actions.js'
import PropTypes from 'prop-types'

const mapStateToProps = state => ({
  background: get(state, 'form.settings.values.background') || null,
  landscape: get(state, 'form.settings.values.landscape') || null,
  items: state.map.items
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addMapItem,
}, dispatch)

class MapWrapper extends Component {

  static propTypes = {
    addMapItem: PropTypes.func.isRequired,
    background: PropTypes.string.isRequired,
    landscape: PropTypes.string.isRequired
  }

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
