import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, ButtonGroup, Grid, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import Map from '../../components/Map/Map'
// import { ADD, DELETE } from './types'
import { landscapeProps } from '../../helpers/propTypes'
import { addMapItem, deleteMapItems, changeEditMode } from './actions'
import * as editTypes from './types'

const mapStateToProps = state => ({
  background: get(state, 'form.settings.values.background') || null,
  landscape: get(state, 'form.settings.values.landscape') || null,
  map: state.map,
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
    background: PropTypes.string.isRequired,
    landscape: landscapeProps.isRequired,
  }

  handleEditMode = (evt) => {
    const editType = get(evt, 'target.value')
    if (Object.keys(editTypes).indexOf(editType) !== -1) {
      this.props.changeEditMode(get(evt, 'target.value'))
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <ButtonGroup>
            <Button value={editTypes.ADD} onClick={this.handleEditMode}>add</Button>
            <Button value={editTypes.DELETE} onClick={this.handleEditMode}>delete</Button>
            <Button disabled>landscapes</Button>
          </ButtonGroup>
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
