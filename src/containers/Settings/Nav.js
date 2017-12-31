import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

export class Navigation extends Component {
  static propTypes = {
     match: PropTypes.object.isRequired,
  }
  
  handleSelect = (eventKey) => {
    const {
      history
    } = this.props
    history.push(`/settings/${eventKey}`)
  }

  render() {
    const {
      match
    } = this.props

    return (
      <Nav bsStyle="tabs" activeKey={match.params.active} onSelect={this.handleSelect}>
        <NavItem eventKey="background" href="/settings/texture">Texture</NavItem>
        <NavItem eventKey="landscape" href="/settings/landscape" title="Item">Landscape</NavItem>
      </Nav>
    )
  }
}

export default withRouter(Navigation)
