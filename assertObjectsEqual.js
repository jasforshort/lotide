const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } for (let i = 0; i < arr1.length; i++)
    if (arr1[i] !== arr2[i])
      return false;
  return true;
};

// Returns true if both objects are identical
const eqObjects = function(object1, object2) {
  // Hold the keys in an array for each object
  const arrOfObject1 = Object.keys(object1);
  const arrOfObject2 = Object.keys(object2);
  // If differing length, returns false
  if (arrOfObject1.length !== arrOfObject2.length) {
    return false;
  } for (const key of arrOfObject1) {
    // If both are arrays, test through eqArrays function, otherwise test each primitive value
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return (eqArrays(object1[key], object2[key]));
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // console.log(`Example label: ${inspect(actual)}`);
  const test = eqArrays(actual, expected);
  test ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);