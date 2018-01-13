import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, ButtonGroup, Grid, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import Map, { ADD, DELETE } from '../../components/Map/Map'
import { landscapeProps } from '../../helpers/propTypes'
import { addMapItem, deleteMapItems } from './actions'

const mapStateToProps = state => ({
  background: get(state, 'form.settings.values.background') || null,
  landscape: get(state, 'form.settings.values.landscape') || null,
  items: state.map.items,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addMapItem,
  deleteMapItems,
}, dispatch)

class MapWrapper extends Component {
  static propTypes = {
    // actions
    addMapItem: PropTypes.func.isRequired,
    deleteMapItems: PropTypes.func.isRequired,

    // state
    background: PropTypes.string.isRequired,
    landscape: landscapeProps.isRequired,
  }

  state={
    editingMode: ADD,
  }

  setEditMode = (evt) => {
    this.setState({
      editingMode: get(evt, 'target.value'),
    })
  }

  render() {
    return (
      <Grid>
        <Row>
          <ButtonGroup>
            <Button value={ADD} onClick={this.setEditMode}>add</Button>
            <Button value={DELETE} onClick={this.setEditMode}>delete</Button>
            <Button disabled>landscapes</Button>
          </ButtonGroup>
        </Row>
        <Row>
          <Col md={1} />

          <Col md={10} >
            <Map
              {...this.props}
              editingMode={this.state.editingMode}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper)
