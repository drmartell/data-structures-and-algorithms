const insertShiftArray = (array, value) => {
  const newArray = [];
  let i;
  const centerIndex = Math.round(array.length / 2) - 1;
  for(i = 0; i <= centerIndex; ++i) newArray[i] = array[i];
  newArray[i] = value;
  for(i; i < array.length; ++i) newArray[i + 1] = array[i];
  return newArray;
};
console.log(insertShiftArray([2, 4, 6, 8], 5));
console.log(insertShiftArray([4, 8, 15, 23, 42], 16));

const removeShiftArray = array => {
  const newArray = [];
  let i;
  const centerIndex = Math.floor(array.length / 2);
  for(i = 0; i <= centerIndex; ++i) newArray[i] = array[i];
  for(i; i < array.length; ++i) newArray[i - 1] = array[i];
  return newArray;
};
console.log(removeShiftArray([2, 4, 5, 6, 8]));
console.log(removeShiftArray([4, 8, 15, 16, 23, 42]));

module.exports = {
  insertShiftArray,
  removeShiftArray,
};
