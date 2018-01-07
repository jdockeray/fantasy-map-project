import renderer from 'react-test-renderer'
import Enzyme, { mount } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

import Map from '../Map'

Enzyme.configure({ adapter: new Adapter() })

const mapProps = {
  position: {
    x: 123,
    y: 124,
  },
  landscape: 'another/amazing/image.png',
  items: [{
    src: 'some/amazing/image.png',
    x: 200,
    y: 300,
  },
  {
    src: 'some/amazing/image.png',
    x: 200,
    y: 300,
  },
  {
    src: 'some/amazing/image.png',
    x: 200,
    y: 300,
  }],
  background: null,
  addMapItem: () => null,
  deleteMapItem: () => null,
}


describe('Map Component:', () => {
  describe('snapshot', () => {
    it('renders with multiple item', () => {
      const map = renderer
        .create(<Map {...mapProps} />)
        .toJSON()

      expect(map).toMatchSnapshot()
    })
  })
  describe('methods', () => {
    mapProps.deleteMapItem = sinon.spy()
    const wrapper = mount((
      <Map {...mapProps} />
    ))
    wrapper.find('#map').simulate('click')
    it('simulates click events', () => {
      expect(mapProps.addMapItem.called)
      expect(mapProps.addMapItem.calledOnce)
    })
  })
})
