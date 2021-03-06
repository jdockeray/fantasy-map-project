import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import { createSelector } from 'reselect'
import Control from '../../components/Map/Control'
import Map from '../../components/Map/Map'
import { landscapeProps } from '../../helpers/propTypes'
import { addMapItem, deleteMapItems, changeEditMode, selectMapItems } from './actions'
import * as editTypes from './types'

const mapEditModeSelector = state => state.mapEditMode
const mapEditModeControls = createSelector(
  mapEditModeSelector,
  mapEditType => [
    editTypes.ADD,
    editTypes.DELETE,
    editTypes.SELECT,
    editTypes.DRAW,
  ].map(label => ({
    label,
    text: label.toLowerCase(),
    active: label === mapEditType.mode,
  })),
)

const mapStateToProps = state => ({
  background: get(state, 'form.settings.values.background'),
  landscape: get(state, 'form.settings.values.landscape'),
  drawing: get(state, 'form.drawing.values'),
  map: state.map,
  mapEditMode: state.mapEditMode,
  mapControls: mapEditModeControls(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addMapItem,
  deleteMapItems,
  changeEditMode,
  selectMapItems,
}, dispatch)

class MapWrapper extends Component {
  static propTypes = {
    // actions
    addMapItem: PropTypes.func.isRequired,
    deleteMapItems: PropTypes.func.isRequired,
    selectMapItems: PropTypes.func.isRequired,
    changeEditMode: PropTypes.func.isRequired,


    // state
    background: PropTypes.string,
    landscape: landscapeProps,
    map: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      })).isRequired,
    }).isRequired,

    // selectors
    mapControls: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      text: PropTypes.string,
      active: PropTypes.bool,
    })).isRequired,
  }

  static defaultProps = {
    background: '',
    landscape: '',
  }

  handleEditMode = (evt) => {
    this.props.changeEditMode(get(evt, 'target.value'))
  }

  render() {
    const {
      mapControls,
    } = this.props

    return (
      <div>

        <Control
          items={mapControls}
          callback={this.handleEditMode}
        />


        <Col md={12} >
          <Map
            {...this.props}
          />
        </Col>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper)
