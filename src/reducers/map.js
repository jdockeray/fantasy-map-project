import dotProp from 'dot-prop-immutable'

export const ADD_MAP_ITEM = 'ADD_MAP_ITEM'
export const SET_MAP_ITEMS = 'SELECT_MAP_ITEM'
export const CHANGE_EDIT_MODE = 'CHANGE_EDIT_MODE'

const initialState = {
  items: [],
}

function map(state = initialState, action) {
  switch (action.type) {
    case SET_MAP_ITEMS: {
      const {
        payload: {
          items,
        },
      } = action
      return dotProp.set(state, 'items', items)
    }

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

export default map
