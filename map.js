const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++)
    if (arr1[i] !== arr2[i])
      return false;
  return true;
};

const assertArraysEqual = function(actual, expected) {
  // using ternary operator
  const test = eqArrays(actual, expected);
  test ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const words = ["larry", "adam", "bernard", "simon"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word[1]);
// const results3 = map(words, word => word[2]);
// console.log(results1);
// console.log(results2);
// console.log(results3);

// assertArraysEqual(results1, [ 'l', 'a', 'b', 's' ]);
// assertArraysEqual(results2, [ 'a', 'd', 'e', 'i' ]);
// assertArraysEqual(results3, [ 'r', 'a', 'r', 'm' ]);

module.exports = map;