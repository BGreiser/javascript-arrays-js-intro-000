var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(x, y) {
  let newArr = [y, ...x];
  return newArr;
};

function destructivelyAddElementToBeginningOfArray(x, y) {
  x.unshift(y);
  return x;
};

function addElementToEndOfArray(x, y) {
  let newArr = [x, ...y];
  return newArr;
};

function destructivelyAddElementToEndOfArray(x, y) {
  x.push(y);
  return x;
};
