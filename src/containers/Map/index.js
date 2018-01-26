import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import Control from '../../components/Map/Control'
import Map from '../../components/Map/Map'
import { landscapeProps } from '../../helpers/propTypes'
import { addMapItem, deleteMapItems, changeEditMode } from './actions'
import * as editTypes from './types'

const mapStateToProps = state => ({
  background: get(state, 'form.settings.values.background') || null,
  landscape: get(state, 'form.settings.values.landscape') || null,
  map: state.map,
  mapEditMode: state.mapEditMode,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addMapItem,
  deleteMapItems,
  changeEditMode,
}, dispatch)

class MapWrapper extends Component {
  static propTypes = {
    // actions
    addMapItem: PropTypes.func.isRequired,
    deleteMapItems: PropTypes.func.isRequired,
    changeEditMode: PropTypes.func.isRequired,

    // state
    background: PropTypes.string,
    landscape: landscapeProps,
  }

  defaultProps: {
    background: '',
    landscape: ''
  }

  handleEditMode = (evt) => {
    const editType = get(evt, 'target.value')
    if (Object.keys(editTypes).indexOf(editType) !== -1) {
      this.props.changeEditMode(get(evt, 'target.value'))
    }
  }

  formatTypeForControl = type => ({
    label: type,
    text: type.toLowerCase(),
  })


  render() {
    return (
      <Grid>
        <Row>
          <Control
            items={[
              this.formatTypeForControl(editTypes.ADD),
              this.formatTypeForControl(editTypes.DELETE),
              this.formatTypeForControl(editTypes.SELECT),
            ]}
            callback={this.handleEditMode}
          />
        </Row>
        <Row>
          <Col md={1} />

          <Col md={10} >
            <Map
              {...this.props}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper)
