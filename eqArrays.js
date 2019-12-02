const assertEqual = require('./assertEqual');

const eqArrays = function (array1, array2) {
  if (array1 === undefined ||
    array2 === undefined ||
    array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
  if (Array.isArray(array1[i])) {
    if (!Array.isArray(array2[i])) {
      return false;
    } else {
      let result = true && eqArrays(array1[i], array2[i]);
      if (result === false) {
        return false;
      }
    }
  } else if (array1[i] !== array2[i]) {
    return false;
  }
}
return true;
};

module.exports = eqArrays;