const binarySearch = (array, target) => { // trueIndex accounts for the 'halves' of the array that have been trimmed off
  // error checking
  if(!Array.isArray(array) || array.length === 0) throw ('binarySearch input must be an array of length 1 or greater');
  if(isNaN(target)) throw ('binarySearch target value must be a number');

  let leftEdge = 0;
  let rightEdge = array.length;

  while(leftEdge <= rightEdge) {
    const length = leftEdge + rightEdge;
    const medianIndex = (length) % 2 === 1 ? length / 2 - 0.5 : length / 2;

    if(array[medianIndex] === target) return medianIndex;

    if(target < array[medianIndex]) rightEdge = medianIndex - 1;
    
    // target is > medianIndex
    else leftEdge = medianIndex + 1;
  }
  return -1;
};

module.exports = {
  binarySearch,
};
