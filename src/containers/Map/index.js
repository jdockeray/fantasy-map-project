import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import ReactCursorPosition from 'react-cursor-position'
import Map from '../../components/Map/Map'
import { landscapeProps } from '../../helpers/propTypes'
import { addMapItem, deleteMapItem } from './actions'

const mapStateToProps = state => ({
  background: get(state, 'form.settings.values.background') || null,
  landscape: get(state, 'form.settings.values.landscape') || null,
  items: state.map.items,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addMapItem,
  deleteMapItem,
}, dispatch)

class MapWrapper extends Component {
  static propTypes = {
    addMapItem: PropTypes.func.isRequired,
    deleteMapItem: PropTypes.func.isRequired,
    background: PropTypes.string,
    landscape: landscapeProps,
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
