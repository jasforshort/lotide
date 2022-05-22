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

const middle = function(inputList) {
  const middleElement = [];
  const inputListLength = inputList.length;
  if (inputListLength === 1 || inputListLength === 2) {
    return middleElement;
  } else if (inputListLength % 2 === 1) {
    middleElement.push(inputList[Math.floor(inputListLength / 2)]);
    return middleElement;
  } else if (inputListLength % 2 === 0) {
    middleElement.push(inputList[(inputListLength / 2) - 1]);
    middleElement.push(inputList[(inputListLength / 2)]);
    return middleElement;
  }
};

assertArraysEqual((middle([1, 2])), []);
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);
assertArraysEqual((middle([1, 2, "spagetti", 4, 5])), ["spagetti"]);