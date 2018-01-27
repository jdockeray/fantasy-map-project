import {
  ADD_MAP_ITEM,
  SET_MAP_ITEMS,
  CHANGE_EDIT_MODE,
} from '../../reducers/map'
import { deleteItems, selectItems } from './utils'

export const addMapItem = item => ({
  type: ADD_MAP_ITEM,
  payload: {
    item,
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
