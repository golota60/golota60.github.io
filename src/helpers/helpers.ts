export const returnNextArrayItem = (array: Array<any>, currentItem: any): any => {
  const itemIndex = array.indexOf(currentItem);
  return (array.indexOf(currentItem) === array.length - 1) ? array[0] : array[itemIndex + 1];
}