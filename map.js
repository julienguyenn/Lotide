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
};


const words = ["ground", "control", "to", "major", "tom"];*/

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

/*
const results1 = map(words, word => word[0]);
console.log(results1);

// My tests
// Empty array
assertArraysEqual(map([], word => word[0]), []);
assertArraysEqual(map(words, word => word[1]), ['r', 'o', 'o', 'a', 'o']);
assertArraysEqual(map(['hi'], word => word[0]), ['h']);*/
