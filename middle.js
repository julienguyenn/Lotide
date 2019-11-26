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

const middle = function(array) {
  let middle;
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 !== 0) { // If the array is odd length
    middle = Math.floor(array.length / 2);
    return [array[middle]];
  } else { // If array is even length
    middle = array.length / 2;
    return array.slice(middle - 1, middle + 1); 
  }
}

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);
