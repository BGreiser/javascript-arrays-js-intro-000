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
