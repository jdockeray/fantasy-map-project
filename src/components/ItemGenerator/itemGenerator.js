import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './itemGenerator.css'
import { randomItems } from './utils'

export default class ItemGenerator extends Component {
  static propTypes = {
    // title: PropTypes.string,
    type: PropTypes.string.isRequired,
  }

  static types = {
    tree: {
      url: '/images/vector-palm-trees_fkc1q5U__L.png',
      width: 20,
      height: 20,
    },
    chicken: {
      url: '/images/cal-0814-cl3-birds-06_L.png',
      width: 20,
      height: 20,
    },
  }

  state = {
    depth: 200,
    items: [{
      visible: true,
    }],
  }

  componentWillMount() {
    const {
      depth,
      items,
    } = this.state

    for (let i = 0; i <= depth; i += 1) {
      items.push({
        visible: true,
      })
    }

    this.setState({
      ...this.state,
      items: randomItems(items),
    })
  }

  renderItem = (item) => {
    console.log(item)
    if (!ItemGenerator.types[this.props.type]) {
      return
    }
    const {
      type,
    } = this.props
    const {
      url,
      width,
      height,
    } = ItemGenerator.types[type]

    const {
      visible,
    } = item

    return (<div
      className={
        classNames(
          'item',
          { visible },
        )}
      width={width}
      height={height}
    >
      <img
        src={url}
        width={width}
        height={height}
        alt="palmtree"
      />
    </div>)
  }

    renderItems = items => items.map((item, index) => this.renderItem(item, index))


    render() {
      const {
        items,
      } = this.state

      const {
        renderItems,
      } = this

      return (
        <div className="canvas" onClick={this.onClick}>

          <div className="items" >
            {
              renderItems(items)
            }
          </div>
        </div>
      )
    }
}
