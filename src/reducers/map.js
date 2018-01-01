import dotProp from 'dot-prop-immutable'
export const ADD_MAP_ITEM = 'ADD_MAP_ITEM'

const initialState = {
  items: [],
}

function mapReducer(state = initialState, action) {
  switch (action.type) {
  case ADD_MAP_ITEM: {
    const {
      payload: {
        item,
      },
    } = action
    return dotProp.set(state, 'items', items => [...items, item])
  }

  default:
    return state
  }
}

export default mapReducer
