import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import { Nav, NavItem, Navbar } from 'react-bootstrap'
import ItemGenerator from '../ItemGenerator/ItemGenerator'
import Condition from '../Util/Condition'
import './Grid.css'

class GridBlock extends Component {
    static propTypes = {
      width: PropTypes.number.isRequired,
    }

    state = {
      configuration: {
        element: 'palm-tree',
      },
    }

    handleSelect = (evt) => {
      this.setState({
        configuration: {
          element: evt,
        },
      })
    }




    render() {
      const {
        width,
      } = this.props

      const {
        configuration: {
          element,
        },
      } = this.state

      const NavInstance = () => (
        <Nav bsStyle="pills" activeKey={this.state.configuration.element} onSelect={this.handleSelect}>
          <NavItem eventKey="tree"><FontAwesome name="tree" /></NavItem>
          <NavItem eventKey="chicken"><FontAwesome name="tree" /></NavItem>
          <NavItem eventKey="tree3" ><FontAwesome name="tree" /></NavItem>
          <NavItem eventKey="ship" ><FontAwesome name="ship" /></NavItem>
        </Nav>
      )

      return (
        <div className="block" width={width}>
          <Condition rule={!!element}>
            <ItemGenerator type={element} />
          </Condition>
          <NavInstance />
        </div>
      )
    }
}

export default GridBlock
