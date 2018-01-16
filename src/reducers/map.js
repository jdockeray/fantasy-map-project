import dotProp from 'dot-prop-immutable'
import { ADD } from '../containers/Map/types'

export const ADD_MAP_ITEM = 'ADD_MAP_ITEM'
export const DELETE_MAP_ITEM = 'DELETE_MAP_ITEM'
export const CHANGE_EDIT_MODE = 'CHANGE_EDIT_MODE'


const initialState = {
  editMode: ADD,
  items: [],
}

function mapReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_MAP_ITEM: {
      const {
        payload: {
          items,
        },
      } = action
      return dotProp.set(state, 'items', items)
    }

    case CHANGE_EDIT_MODE: {
      const {
        payload: {
          mode,
        },
      } = action
      return dotProp.set(state, 'editMode', mode)
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

export default mapReducer
