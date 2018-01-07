import PropTypes from 'prop-types'

export const landscapeProps = PropTypes.shape({
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
})

export const itemProps = PropTypes.shape({
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
})
