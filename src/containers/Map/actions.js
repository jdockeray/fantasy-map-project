import {
  ADD_MAP_ITEM,
  DELETE_MAP_ITEM,
  CHANGE_EDIT_MODE,
} from '../../reducers/map'
import { deleteItems } from './utils'

export const addMapItem = item => ({
  type: ADD_MAP_ITEM,
  payload: {
    item,
  },
})

export const deleteMapItems = ({ x, y }, items) => ({
  type: DELETE_MAP_ITEM,
  payload: {
    items: deleteItems(x, y, items),
  },
})

export const changeEditMode = mode => ({
  type: CHANGE_EDIT_MODE,
  payload: {
    mode,
  },
})
