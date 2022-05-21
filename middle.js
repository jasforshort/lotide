const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++)
    if (arr1[i] !== arr2[i])
      return false;
  return true;
};

const assertArraysEqual = function(a, b) {
  const test = eqArrays(a, b);
  test ? console.log("true") : console.log("false");
};

const middle = function(array) {
  let midway = [];
  if (array.length === 1 || array.length === 2) {
    return midway;
  } else if (array.length % 2 === 1) {
    midway.push(array[Math.floor(array.length / 2)]);
    return midway;
  } else if (array.length % 2 === 0) {
    midway.push(array[Math.floor(array.length / 2) - 1]);
    midway.push(array[Math.floor(array.length / 2)]);
    return midway;
  }
};

assertArraysEqual((middle([1, 2])), []);
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);
assertArraysEqual((middle([1, 2, "spagetti", 4, 5])), ["spagetti"]);