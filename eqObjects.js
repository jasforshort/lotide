const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++)
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
  }
  for (const key of arrOfObject1) {
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);