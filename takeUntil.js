/*const eqArrays = function(array1, array2) {
  if (array1 === undefined ||
    array2 === undefined ||
    array1.length  !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    console.log("👻These two arrays are not the same.");
  } else {
    console.log("🤗These arrays are the same.");
  }
};*/

const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
};

module.exports = takeUntil;

/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1,2,5,7,2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
*/