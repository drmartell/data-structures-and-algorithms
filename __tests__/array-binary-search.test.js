const {
  binarySearch,
} = require('../challenges/arrayBinarySearch/array-binary-search.js');

describe('binarySearch', () => {
  it('should return the index of a target element within an array, -1 if not found, or throw appropriate error', () => {
    expect(binarySearch([4, 8, 15, 16, 23, 42, 58], 60)).toEqual(-1);
    expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
    expect(binarySearch([11, 22, 33, 44, 55, 66, 77, 90, 100], 22)).toEqual(1);
    expect(binarySearch([1], 1)).toEqual(0);
    // expect(binarySearch([], 22)).toThrowError();
    // expect(binarySearch([], [])).toThrow();
  });
});
