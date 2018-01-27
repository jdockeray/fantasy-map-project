
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

export const selectItems = (x, y, items) =>
  items.map(item => ({ ...item, selected: isItemActive(x, y, item) }))

export const deleteItems = (x, y, items) => items.filter(item => !isItemActive(x, y, item))
