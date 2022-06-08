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

module.exports = middle;