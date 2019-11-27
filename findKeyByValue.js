const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊🤗 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😤😢 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKeyByValue = function(anObject, aValue) {
  const keys = Object.keys(anObject);
  for (const key of keys) {
    if (anObject[key] === aValue){
      return key;
    } 
  }
};

// Test cases
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)