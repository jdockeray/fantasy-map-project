
export const isItemActive = (x, y, item) => {
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
    return false
  }
  return true
}

export const deleteItems = (x, y, items) => items.filter(item => isItemActive(x, y, item))
