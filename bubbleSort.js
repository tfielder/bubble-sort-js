function switchIndices(array, index) {
  var current = array[index];
  var next = array[index + 1];

  array[index] = next;
  array[index + 1] = current;

  return array;
};

function checkArraySequenced(array) {
  for (i = 0; i < (array.length - 1); i++)
    {
      if (array[i] > array[i + 1]) {
        return false;
      }
    }
  return true;
};

function sortArray(array) {
  var array = array;
  while (checkArraySequenced(array) == false) {
    for (i = 0; i < (array.length - 1); i++)
      {
        if (array[i] > array[i + 1]) {
          array = switchIndices(array, i);
        }
      }
  }
  return array;
};


module.exports = {
  switchIndices: switchIndices,
  checkArraySequenced: checkArraySequenced,
  sortArray: sortArray,
}