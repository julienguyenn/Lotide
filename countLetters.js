//const assertEqual = require('./assertEqual');

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