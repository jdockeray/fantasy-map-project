import dotProp from 'dot-prop-immutable'
import { ADD } from '../containers/Map/types'

export const CHANGE_EDIT_MODE = 'CHANGE_EDIT_MODE'


const initialState = {
  mode: ADD,
}

function mapEditMode(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EDIT_MODE: {
      const {
        payload: {
          mode,
        },
      } = action
      return { mode }
    }

    default:
      return state
  }
}

export default mapEditMode
