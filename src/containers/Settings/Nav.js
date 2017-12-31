import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
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
    history.push(`/settings/landscape/${eventKey}`)
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
        </Nav>
        <Condition rule={location.pathname.indexOf('landscape') !== -1}>
          <Nav bsStyle="pills" justified activeKey={match.params.category} onSelect={this.handleNestedSelect}>
            <NavItem eventKey="volcano" href="/settings/landscape/volcano">Volcano</NavItem>
            <NavItem eventKey="trees" href="/settings/landscape/trees" title="Item">Trees</NavItem>
            <NavItem eventKey="town" href="/settings/landscape/town" title="Item">Town</NavItem>
            <NavItem eventKey="rocks" href="/settings/landscape/rocks" title="Item">Rocks</NavItem>
            <NavItem eventKey="plants" href="/settings/landscape/plants" title="Item">Plants</NavItem>
            <NavItem eventKey="ocean" href="/settings/landscape/ocean" title="Item">Ocean</NavItem>
            <NavItem eventKey="misc" href="/settings/landscape/misc" title="Item">Misc</NavItem>
            <NavItem eventKey="hills" href="/settings/landscape/hills" title="Item">Hills</NavItem>
            <NavItem eventKey="grass" href="/settings/landscape/grass" title="Item">Grass</NavItem>
            <NavItem eventKey="animals" href="/settings/landscape/animals" title="Item">Animals</NavItem>
          </Nav>
        </Condition>

      </div>
    )
  }
}

export default withRouter(Navigation)
