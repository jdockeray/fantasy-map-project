export const randomItems = items => items.map((item) => {
  const { visible } = item;
    item = Math.random() < 0.5 ?
    item
    : { ...item, visible: false };
  return item;
});
