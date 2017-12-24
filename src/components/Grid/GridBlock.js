import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import { Nav, NavItem, Navbar } from 'react-bootstrap'
import ItemGenerator from '../itemGenerator/itemGenerator'
import Condition from '../util/Condition'
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

    navInstance = () =>
      (
        <Nav bsStyle="pills" activeKey={this.state.configuration.element} onSelect={this.handleSelect}>
          <NavItem eventKey="tree"><FontAwesome name="tree" /></NavItem>
          <NavItem eventKey="chicken"><FontAwesome name="tree" /></NavItem>
          <NavItem eventKey="tree3" ><FontAwesome name="tree" /></NavItem>
          <NavItem eventKey="ship" ><FontAwesome name="ship" /></NavItem>
        </Nav>
      )


    render() {
      const {
        width,
      } = this.props

      const {
        configuration: {
          element,
        },
      } = this.state

      return (
        <div className="block" width={width}>
          <Condition rule={!!element}>
            <ItemGenerator type={element} />
          </Condition>
          { this.navInstance() }
        </div>
      )
    }
}

export default GridBlock
