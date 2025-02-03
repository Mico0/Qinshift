// TODO: Learn about promises, about pure and impure functions

//! Simple callback examples

function printInConsole(data) {
  console.log(data);
}

function sum(num, num1) {
  return num + num1;
}

// let result = sum(2, 2);
// printInConsole(result);

function sumAndPrint(num, num1) {
  let result = num + num1;
  printInConsole(result);
}

// sumAndPrint(4, 7);

function sumWithCallBack(num, num1, callbackFnc) {
  let result = num + num1;
  callbackFnc(result);
}

sumWithCallBack(4, 10, function (data) {
  console.log(data);
});

sumWithCallBack(2, 8, (data) => {
  if (data % 2 === 0) {
    console.log(`${data} is an even number`);
  } else {
    console.log(`${data} is an odd number`);
  }
});

function subtractWithCallback(a, b, callbackFNC) {
  let result = a - b;
  return callbackFNC(result);
}

let result = subtractWithCallback(10, 5, (data) => {
  if (data % 3 === 0) {
    return data;
  } else {
    return data + 10;
  }
});

// console.log(result);
