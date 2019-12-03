const arrayReverse = array => {
  const reversedArray = [];
  for(let i = 0; i < array.length; ++i)
    reversedArray[i] = array[array.length - 1 - i];
  return reversedArray;
};

const arrayReverse2 = array => {
  const arrayLength = array.length;
  for(let i = 0; i < arrayLength; ++i)
    array[arrayLength + i] = array[arrayLength - 1 - i];
  for(let i = 0; i < arrayLength; ++i)
    array[i] = array[arrayLength + i];
  array.length = arrayLength;
  return array;
};

const arrayReverse3 = (array, i = 0, arrayObject = {}, reversedArray = []) => {
  // base case, we've reached the end of the array
  if(!array[i]) {
    const arrayMaxIndex = Math.max(...Object.keys(arrayObject));
    for(let key in arrayObject)
      reversedArray[arrayMaxIndex - key] = arrayObject[key];
    return reversedArray;
  }
  // recursive case
  arrayObject[i] = array[i];
  return arrayReverse3(array, ++i, arrayObject);
};

module.exports = {
  arrayReverse,
  arrayReverse2,
  arrayReverse3,
};
