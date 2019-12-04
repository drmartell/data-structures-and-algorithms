const insertShiftArray = (array, value) => {
  const newArray = [];
  let i;
  const centerIndex = Math.round(array.length / 2) - 1;
  for(i = 0; i <= centerIndex; ++i) newArray[i] = array[i];
  newArray[i] = value;
  for(i; i < array.length; ++i) newArray[i + 1] = array[i];
  return newArray;
};

const removeShiftArray = array => {
  if(array.length <= 1) return [];
  const newArray = [];
  let i;
  const centerIndex = Math.floor(array.length / 2);
  for(i = 0; i <= centerIndex; ++i) newArray[i] = array[i];
  for(i; i < array.length; ++i) newArray[i - 1] = array[i];
  return newArray;
};

module.exports = {
  insertShiftArray,
  removeShiftArray,
};
