import { ADD_MAP_ITEM } from '../../reducers/map'

export const addMapItem = item => ({
  type: ADD_MAP_ITEM,
  payload: {
    item,
  },
})