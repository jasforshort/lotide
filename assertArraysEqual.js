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
  // using if else loop
  // if (eqArrays(a, b)) {
  //   console.log("The two compared arrays are equal. 😀");
  // } else {
  //   console.log("The two compared arrays are not equal. 🥲");
  // }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 5]);