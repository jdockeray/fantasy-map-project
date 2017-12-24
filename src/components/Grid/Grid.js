import React from 'react'
import PropTypes from 'prop-types'

import GridBlock from './GridBlock'
import './Grid.css'

const Grid = ({
  numberOfCols,
  numberOfRows,
  block,
}) => {
  const Items = []
  for (let i = 0; i < numberOfCols; i += 1) {
    Items.push(<GridBlock width={block.width} />)
  }
  return (
    <div className="grid" width={block.width}>
      { Items }
    </div>
  )
}


export default Grid
Grid.propTypes = {
  block: PropTypes.object,
  numberOfRows: PropTypes.number,
  numberOfCols: PropTypes.number,
  block: PropTypes.object,
}
Grid.defaultProps = {
  numberOfCols: 12,
  numberOfRows: 12,
  block: {
    width: 300,
  },
}
