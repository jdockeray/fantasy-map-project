import { Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Condition from '../../components/Util/Condition'

export class Navigation extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  handleSelect = (eventKey) => {
    const {
      history,
    } = this.props
    history.push(`/settings/${eventKey}`)
  }

  handleNestedSelect = (eventKey) => {
    const {
      history,
    } = this.props

    history.push(`/settings/landscape/${eventKey.target.value.toLowerCase()}`)
  }

  render() {
    const {
      match,
      navStyle,
      location,
    } = this.props

    return (
      <div>
        <Nav bsStyle="tabs" activeKey={match.params.active} onSelect={this.handleSelect}>
          <NavItem eventKey="background" href="/settings/texture">Texture</NavItem>
          <NavItem eventKey="landscape" href="/settings/landscape" title="Item">Landscape</NavItem>
          <NavItem eventKey="draw" href="/settings/draw" title="Item">Draw</NavItem>

        </Nav>
        <Condition rule={location.pathname.indexOf('landscape') !== -1}>
          <FormGroup controlId="formControlsSelect" onSelect={this.handleNestedSelect}>
            <ControlLabel>Please select an icon to add to the landscape</ControlLabel>
            <FormControl componentClass="select" placeholder="select" onChange={this.handleNestedSelect}>
              <option eventKey="volcano" href="/settings/landscape/volcano">Volcano</option>
              <option eventKey="trees" href="/settings/landscape/trees" title="Item">Trees</option>
              <option eventKey="town" href="/settings/landscape/town" title="Item">Town</option>
              <option eventKey="rocks" href="/settings/landscape/rocks" title="Item">Rocks</option>
              <option eventKey="plants" href="/settings/landscape/plants" title="Item">Plants</option>
              <option eventKey="ocean" href="/settings/landscape/ocean" title="Item">Ocean</option>
              <option eventKey="misc" href="/settings/landscape/misc" title="Item">Misc</option>
              <option eventKey="hills" href="/settings/landscape/hills" title="Item">Hills</option>
              <option eventKey="grass" href="/settings/landscape/grass" title="Item">Grass</option>
              <option eventKey="animals" href="/settings/landscape/animals" title="Item">Animals</option>
            </FormControl>
          </FormGroup>
        </Condition>


      </div>
    )
  }
}

export default withRouter(Navigation)
