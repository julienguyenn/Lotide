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

// Looping
/*const flatten = function(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      let nested = array[i];
      for (let index = 0; index < nested.length; index++) {
        newArr.push(nested[index]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  console.log(newArr);
  return newArr;
}*/

/*const flatten = function (array) {
  let flattenedArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      console.log('pushed')
      flattenedArray.push(...flatten(element));
    } else {
      // let placeholder = array.splice(array.indexOf(element), 1);
      flattenedArray.push(element);//push(...placeholder);
    }
  }
  console.log(flattenedArray, 'flattened');
  return flattenedArray;
};*/

const flatten = function (array) {
  let newArray = [];
  for (let element of array) {
    if (!Array.isArray(element)) {
      newArray.push(element);
    } else {
      newArray.push(...flatten(element));
    }
  }
  return newArray;
};

console.log(flatten([1, [1, 2, 3]]));

module.exports = flatten;

//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2 , 3, 4, 5, 6]);

