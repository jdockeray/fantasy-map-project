import {
  SET_MAP_ITEMS,
  CHANGE_EDIT_MODE,
} from '../../reducers/map'
import {
  deleteItems,
  selectItems,
  addMapItems,
} from './utils'

export const addMapItem = (item, items = []) => ({
  type: SET_MAP_ITEMS,
  payload: {
    items: addMapItems(item, items),
  },
})

export const deleteMapItems = ({ x, y }, items) => ({
  type: SET_MAP_ITEMS,
  payload: {
    items: deleteItems(x, y, items),
  },
})

export const selectMapItems = ({ x, y }, items) => ({
  type: SET_MAP_ITEMS,
  payload: {
    items: selectItems(x, y, items),
  },
})

export const changeEditMode = mode => ({
  type: CHANGE_EDIT_MODE,
  payload: {
    mode,
  },
})
