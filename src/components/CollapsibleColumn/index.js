import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import FontAwesome from 'react-fontawesome'
import './CollapsibleColumn.css'

export default class CollapsibleColumn extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  }
  state = {
    collapsed: false,
  }

  collapse = (evt) => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    const {
      collapsed,
    } = this.state
    return (
      <div className={classNames('collapsibleColumn', {
        collapsed,
      })}
      >
        <div className={classNames('panel', {
          collapsed,
        })}
        >
          {this.props.children}
        </div>
        <div
          className="control"
          onClick={() => { this.collapse() }}
        >
          <FontAwesome
            name={
              !this.state.collapsed ? 'angle-left' : 'angle-right'
            }
            size="2x"
          />
        </div>
      </div>
    )
  }
}
