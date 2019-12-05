const binarySearch = (array, target) => { // trueIndex accounts for the 'halves' of the array that have been trimmed off
  // error checking
  if(!Array.isArray(array) || array.length === 0) throw (`${this.name} input must be an array of length 1 or greater`);
  if(isNaN(target)) throw (`${this.name} target value must be a number`);

  // 'slice' array
  const newArray = [];
  for(let i = 0; i < array.length; ++i)
    newArray[i] = array[i];

  while(newArray.length !== 1) {
    const length = newArray.length;
    // if there is a true middle value, check it
    if(length % 2 === 1) {
      const medianIndex = length / 2 - 0.5;
      if(newArray[medianIndex] === target) return true // BUT, NEED TO RETURN THE ACTUAL INDEX SOMEHOW
      if(target < medianIndex) {
        newArray.length = medianIndex;
        // AND SOMEHOW UPDATE INDEX
      }
      // target is > medianIndex
      else()
    }

    // check if target is middle value
    if(medianIndex % 2 === 0.5 && newArray[medianIndex] === target) return true; // BUT, NEED TO RETURN THE ACTUAL INDEX SOMEHOW

    // determine which half of array to continue with
    if(target < median)
  }

  // now length === 1
  if(newArray[0] === target) return 0;
  else return -1;

  // edge cases
  if(length === 0 || (length === 1 && newArray[1] !== target)) return -1;
  if(length === 2) {
    if(newArray[1] === target) return i;
    if(newArray[2] === target) return i + 1;
  }
  
  // otherwise continue to halve newArray
  if(target < newArray[i]) {
    console.log(newArray);
    console.log('it is less', i);
    newArray.length = i;
  }
  else {
    console.log('it is greater', i);
    offset += i; // THIS NEEDS WORK
    for(let j = i; j < newArray.length; ++j)  
      newArray[j - i] = newArray[j];
    newArray.length = i + 1;
  }
  return binarySearch (newArray, target, trueIndex);
};
console.log(binarySearch([4, 8, 15, 16, 23, 42, 58], 15));
// console.log(binarySearch([4, 8, 15, 16, 23, 42], 15));
// console.log(binarySearch([11, 22, 33, 44, 55, 66, 77, 90, 100], 90));

module.exports = {
  binarySearch,
};
