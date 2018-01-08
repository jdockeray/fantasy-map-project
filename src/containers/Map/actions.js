import { ADD_MAP_ITEM, DELETE_MAP_ITEM } from '../../reducers/map'
import { deleteItems } from './utils'

export const addMapItem = item => ({
  type: ADD_MAP_ITEM,
  payload: {
    item,
  },
})

// Need to flesh this out
export const deleteMapItems = ({ x, y }, items) => ({
  type: DELETE_MAP_ITEM,
  payload: {
    items: deleteItems(x, y, items),
  },
})
