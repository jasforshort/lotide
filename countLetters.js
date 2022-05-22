const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentenceInput) {
  const numOfLetters = {};
  sentenceInput = sentenceInput.replace(/\s/g, '');
  for (const letter of sentenceInput) {
    if (typeof letter === 'string' || letter instanceof String) {
      if (!numOfLetters[letter]) {
        numOfLetters[letter] = 1;
      } else {
        numOfLetters[letter]++;
      }
    }
  }
  return numOfLetters;
};

console.log(countLetters("lighthouse in the house"));