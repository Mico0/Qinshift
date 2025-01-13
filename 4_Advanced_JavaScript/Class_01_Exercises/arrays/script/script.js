let array = [];

for (let i = 1; i <= 1000; i++) {
  array.push(i);
}

function generateArrayOdd(array) {
  let arrayOdd = [];
  for (let el of array) {
    if (el % 3 === 0) {
      arrayOdd.push(el);
    }
  }
  return arrayOdd;
}
function generateArrayEven(array) {
  let arrayEven = [];
  for (let el of array) {
    if (el % 4 === 0) {
      arrayEven.push(el);
    }
  }
  return arrayEven;
}
function generateArrayOne(array) {
  let arrayOne = [];
  for (let el of array) {
    if (el % 100 === 1) {
      arrayOne.push(el);
    } else if (el % 10 === 1) {
      arrayOne.push(el);
    }
  }
  return arrayOne;
}

console.log(generateArrayOdd(array));
console.log(generateArrayEven(array));
console.log(generateArrayOne(array));

function onlyStrings(array) {
  let newArray = [];
  for (el of array) {
    if (typeof el === "string") {
      newArray.push(el);
    }
  }
  return newArray;
}

function onlyNumbers(array) {
  let newArray = [];
  for (el of array) {
    if (typeof el === "number" && !Number.isNaN(el)) {
      newArray.push(el);
    }
  }
  return newArray;
}

function onlyTruthy(array) {
  let newArray = [];
  for (el of array) {
    if (el) {
      newArray.push(el);
    }
  }
  return newArray;
}

console.log(
  onlyStrings([
    true,
    false,
    12,
    13,
    44,
    2345,
    "Bob",
    "Jill",
    false,
    undefined,
    1000,
    null,
    "Jack",
    "",
    "",
    99,
    "Greg",
    undefined,
    NaN,
    1,
    22,
  ])
);

console.log(
  onlyNumbers([
    true,
    false,
    12,
    13,
    44,
    2345,
    "Bob",
    "Jill",
    false,
    undefined,
    1000,
    null,
    "Jack",
    "",
    "",
    99,
    "Greg",
    undefined,
    NaN,
    1,
    22,
  ])
);

console.log(
  onlyTruthy([
    true,
    false,
    12,
    13,
    44,
    2345,
    "Bob",
    "Jill",
    false,
    undefined,
    1000,
    null,
    "Jack",
    "",
    "",
    99,
    "Greg",
    undefined,
    NaN,
    1,
    22,
  ])
);
