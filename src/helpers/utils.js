export const getMousePos = (evt, canvas) => {
  const rect = canvas.getBoundingClientRect()
  return {
    y: evt.clientY - rect.top,
    x: evt.clientX - rect.left,
  }
}
