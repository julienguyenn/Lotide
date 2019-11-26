const eqArrays = function(array1, array2) {
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
};

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2], [1,3]);