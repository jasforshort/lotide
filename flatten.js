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

const flatten = function(array1) {
  let flatArray = [];
  for (const element of array1) {
    if (Array.isArray(element)) {
      flatArray.push(...element);
    } else {
      flatArray.push(element);
    }
  }
  console.log(flatArray)
  return flatArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["spagetti", ["ice", 4, "potato"], 2, [3, 4], "coffee", [6]]), ["spagetti", "ice", 4, "potato", 2, 3, 4, "coffee", 6]);