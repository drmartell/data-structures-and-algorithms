const {
  insertShiftArray,
  removeShiftArray,
} = require('../challenges/arrayShift/array-shift.js');

describe('shift array functions', () => {
  it('insertShiftArray should add a value to the center of an array', () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
    expect(insertShiftArray([], 5)).toEqual([5]);
  });
  it('removeShiftArray should remove a value from the center of an array', () => {
    expect(removeShiftArray([2, 4, 5, 6, 8])).toEqual([2, 4, 6, 8]);
    expect(removeShiftArray([4, 8, 15, 16, 23, 42])).toEqual([4, 8, 15, 23, 42]);
    expect(removeShiftArray([])).toEqual([]);
    expect(removeShiftArray([1])).toEqual([]);
  });
});
