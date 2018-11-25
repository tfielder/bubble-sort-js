const assert = require('chai').assert;
const bubbleSort = require('../bubbleSort.js')

describe('bubble sort functionality', function(){
  it('it can switch two indices in an array', function(){
    assert.deepEqual(bubbleSort.switchIndices([4,3], 0), [3,4]);
    assert.deepEqual(bubbleSort.switchIndices([4,3,5], 1), [4,5,3]);
  });
  it('checks for ascending order', function(){
    assert.equal(bubbleSort.checkArraySequenced([1,2,3,4]), true);
    assert.equal(bubbleSort.checkArraySequenced([1,3,2,4]), false);
    assert.equal(bubbleSort.checkArraySequenced([4,5,6,7]), true);
    assert.equal(bubbleSort.checkArraySequenced([4,5,6,10]), true);
  });
  it('sorts the array', function(){
    assert.deepEqual(bubbleSort.sortArray([1,2,3]), [1,2,3]);
    assert.deepEqual(bubbleSort.sortArray([1,3,2]), [1,2,3]);
    assert.deepEqual(bubbleSort.sortArray([1,3,2,4]), [1,2,3,4]);
    assert.deepEqual(bubbleSort.sortArray([4,3,2,1]), [1,2,3,4]);
    assert.deepEqual(bubbleSort.sortArray(['c','b','a']), ['a','b','c']);
  });
});