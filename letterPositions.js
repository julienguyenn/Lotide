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

const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (sentence[i] !== ' ') {
      if (result[letter]) {
        result[letter].push(i);
      } else {
        result[letter] = [i];
      }
    }
  }
  return result;
}

module.exports(letterPositions);
/*
// Test case for string 'hello'
const finalResult = letterPositions('hello');

assertArraysEqual(finalResult['h'], [0]);
assertArraysEqual(finalResult['e'], [1]);
assertArraysEqual(finalResult['l'], [2, 3]);
assertArraysEqual(finalResult['o'], [4]);*/
