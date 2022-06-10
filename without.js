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

// this function removes certain items and does not alter the array
const without = function(source, itemsToRemove) {
  let cleanArray = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      cleanArray.push(element);
    }
  }
  //console.log(filteredArray)
  return cleanArray;
};

// test cases
// assertArraysEqual(without([1,2,3], [1]), [2,3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;