let sum = 0;

for (let i = 0; i < 100; i++) {
  sum += i;
}

// console.log(sum);

function recursiveSum(num) {
  //   console.log(num);
  if (num === 100) {
    // debugger;
    return 0;
  } else {
    return num + recursiveSum(num + 1);
  }
}

let sumToArrow = (n) => (n === 0 ? 0 : n + sumToArrow(--n));

// console.log(recursiveSum(1));

function fibonacci(n) {
  let a = 1;
  let b = 0;
  let temp;

  while (n >= 0) {
    temp = a;
    // console.log("Temp ", temp);
    a = a + b;
    // console.log("a ", a);
    b = temp;
    // console.log("b ", b);
    n--;
  }
  return b;
}

// console.log(fibonacci(10));

function recFibonnaci(n) {
  if (n <= 1) {
    return 1;
  } else {
    // debugger;
    return recFibonnaci(n - 1) + recFibonnaci(n - 2);
  }
}

console.log(recFibonnaci(10));
console.log(sumToArrow(10));
