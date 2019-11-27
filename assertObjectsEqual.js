const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length === object2Keys.length) { //if they are the same length 
    for (key of object1Keys) { // check using every key of object1
      if (object2[key]) { // if the key exists in object2
        if (Array.isArray(object2[key])) {  // if the value of the key is an array
            if (!eqArrays(object1[key], object2[key])) { // if arrays are not equal
              return false;
            }
        } else if (object1[key] !== object2[key]) { // if the values are not equal
            return false;
          } 
        }
      }
    return true; //if the loop completes without returning false
  } else {
    return false; // if the objects lengths are not the same length
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects) { // If they are the same objects
    console.log(`🤗🤗 Assertion Passes: ${inspect(actual)} === ${inspect(expected)}`);
  } else { // If they are not the same objects
    console.log(`👻👻 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

assertObjectsEqual({a:'1', b: 2}, {b: 2, a: '1'});

