const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊🤗 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😤😢 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function(aString) { 
  let result = {};
  for (const letter of aString) {
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

module.exports(countLetters);
//console.log(countLetters('lighthouse in the house'));