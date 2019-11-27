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


const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length === object2Keys.length) {
    for (key of object1Keys) {
      if (object2[key]) { // if the key exists in object2
        if (Array.isArray(object2[key])) {  // if an array
            if (!eqArrays(object1[key], object2[key])) { // if arrays are not equal
              return false;
            }
        } else {
          if (object1[key] !== object2[key]) {
            return false;
          } 
        }
      }
    }
    return true; //if everything goes well
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

