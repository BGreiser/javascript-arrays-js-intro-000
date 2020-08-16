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
  let arr = x.unshift(y);
  return newArr;
};

    
