const middle = function(array) {
  let middle;
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 !== 0) { // If the array is odd length
    middle = Math.floor(array.length / 2);
    return [array[middle]];
  } else { // If array is even length
    middle = array.length / 2;
    return array.slice(middle - 1, middle + 1); 
  }
};

module.exports = middle;

