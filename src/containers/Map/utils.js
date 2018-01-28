
export const isItemActive = (x, y, item = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
}) => {
  const upperLeftCorner = {
    x: item.x,
    y: item.y,
  }

  const lowerRightCorner = {
    x: item.x + (item.width),
    y: item.y + (item.height),
  }
  if (
    (x >= upperLeftCorner.x && x <= lowerRightCorner.x)
    && (y >= upperLeftCorner.y && y <= lowerRightCorner.y)
  ) {
    return true
  }
  return false
}

export const isCursorActive = (x, y, items) =>
  items.reduce((acc, item) => {
    if (acc) return true

    return isItemActive(x, y, item)
  }, false)

export const deselectItems = items => items.map(i => ({ ...i, selected: false }))

export const selectItems = (x, y, items) => {
  if (isCursorActive(x, y, items)) {
    return items.map(item => ({ ...item, selected: item.selected || isItemActive(x, y, item) }))
  }

  return deselectItems(items)
}


export const deleteItems = (x, y, items) => items.filter(item => !isItemActive(x, y, item))

export const addMapItems = (item, items) => [...items, item]
