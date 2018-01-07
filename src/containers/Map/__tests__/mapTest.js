import configureStore from 'redux-mock-store'
import { addMapItem } from '../actions'
import { ADD_MAP_ITEM } from '../../../reducers/map'

const middlewares = []
const mockStore = configureStore(middlewares)


it('addMapItem - should dispatch action', () => {
  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)
  const item = {
    src: 'foo/bar/someEpicImage',
    x: 1234,
    y: 123,
  }
  // Dispatch the action
  store.dispatch(addMapItem(item))

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = {
    type: ADD_MAP_ITEM,
    payload: {
      item,
    },
  }
  expect(actions)
})
