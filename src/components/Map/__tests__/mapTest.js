import renderer from 'react-test-renderer'

import React from 'react'
import Map from '../Map'

it('renders empty props correctly', () => {
  const mapProps = {
    position: {
      x: 123,
      y: 124,
    },
    landscape: null,
    items: [],
    background: null,
    addMapItem: () => null,
  }

  const map = renderer
    .create(<Map {...mapProps} />)
    .toJSON()

  expect(map).toMatchSnapshot()
})
