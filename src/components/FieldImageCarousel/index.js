import React from 'react'
import { Carousel } from 'react-bootstrap'
import './style.css'

const fieldGroupPropTypes = {

}

export default function FieldCarousel({
  fields = [],
  numberPerSlide = 5,
}) {
  const fieldsDivided = []
  for (let i = 0; i < fields.length; i += numberPerSlide) {
    const group = []

    for (let x = i; x < i + numberPerSlide; x++) {
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
          <Carousel.Item  >
            { field }
          </Carousel.Item>))}
    </Carousel>
  )
}
