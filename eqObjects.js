const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊🤗 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😤😢 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1 === undefined ||
    array2 === undefined ||
    array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  //if they are the same length
  if (object1Keys.length === object2Keys.length) {

    // check using every key of object1
    for (let key of object1Keys) {
      if (object2[key]) { // if the key exists in object2

        // if the value of the key is an array
        if (Array.isArray(object2[key])) {
          if (!eqArrays(object1[key], object2[key])) { // if arrays are not equal
            return false;
          }


          // if the value is another object (nested object)
        } else if (typeof object2[key] === 'object') {
          // if the object1[key] does not have an object value
          if (typeof object1[key] !== 'object') {
            return false;
          } else {
            let result = true && eqObjects(object1[key], object2[key]);
            if (result === false) {
              return false;
            }
          }

          // if the value is a primitive data type
        } else if (object1[key] !== object2[key]) { // if the values are not equal
          return false;
        }
      }
    }

    return true; //if the loop completes without returning false

    // if the objects lengths are not the same length
  } else {
    return false;
  }
};


// Test case: Primitive values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

// Test case: Non-primitive values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
