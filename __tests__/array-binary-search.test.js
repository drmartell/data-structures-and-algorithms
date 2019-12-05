const {
  binarySearch,
} = require('../challenges/arrayShift/array-binary-search.js');

describe('binarySearch', () => {
  it('should return the index of a target element within an array', () => {
    expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
    expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
  });
});
