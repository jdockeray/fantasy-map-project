import React from 'react'
import { Carousel } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './style.css'

const fieldGroupPropTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  numberPerSlide: PropTypes.Number,
}


export default function FieldCarousel({
  fields = [],
  numberPerSlide,
}) {
  const fieldsDivided = []
  for (let i = 0; i < fields.length; i += numberPerSlide) {
    const group = []

    for (let x = i; x < i + numberPerSlide; x += 1) {
      group.push(fields[x])
    }
    fieldsDivided.push(group)
  }
  return (
    <Carousel
      id="itemCarousel"
      interval={false}
    >
      { fieldsDivided.map(field =>
        (
          <Carousel.Item >
            <div className="itemInner">
              { field }
            </div>
          </Carousel.Item>))}
    </Carousel>
  )
}
FieldCarousel.defaultProps = {
  numberPerSlide: 5,
}
FieldCarousel.propTypes = fieldGroupPropTypes
