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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (sentence[i] in results) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

// assertArraysEqual(letterPositions("ice cream"), { i: [ 0 ], c: [ 1, 4 ], e: [ 2, 6 ], r: [ 5 ], a: [ 7 ], m: [ 8 ] });

module.exports = letterPositions;