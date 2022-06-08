const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  // using ternary operator
  const test = eqArrays(actual, expected);
  test ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  // using if else loop
  // if (eqArrays(a, b)) {
  //   console.log("The two compared arrays are equal. 😀");
  // } else {
  //   console.log("The two compared arrays are not equal. 🥲");
  // }
};

module.exports = assertArraysEqual;