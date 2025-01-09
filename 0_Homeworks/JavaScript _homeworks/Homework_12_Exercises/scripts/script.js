function createArray(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}
console.log("Create Array\n");
console.log(createArray(10));
console.log("======\n");

function getFirstValue(array) {
  //   return array[0];
  let result = array.shift();
  return result;
}

let array1 = [22, 1, 3, 4, 5];
console.log("Get First Value\n");
console.log(getFirstValue(array1));
console.log("======\n");

function search(array, index) {
  let el_index = -1;
  for (let number of array) {
    if (index === number) {
      el_index = array.indexOf(number);
    }
  }
  return el_index;
}
let array2 = [22, 1, 3, 4, 5, 13, 15, 16];
console.log("Search\n");
console.log(search(array2, 222));
console.log(search(array2, 5));
console.log("======\n");

function check(array, num) {
  for (let number of array) {
    if (number === num) {
      return true;
    }
  }
  return false;
}
let array3 = [22, 1, 3, 4, 5, 13, 15, 16];
console.log("Check\n");
console.log(check(array3, 27));
console.log(check(array3, 22));
console.log("======\n");

function negate(array) {
  let result = [];
  let tmp = 0;
  for (let number of array) {
    tmp = -number;
    result.push(tmp);
  }
  return result;
}
let array4 = [-22, 1, 3, 4, 5, -13, 15, 16];
console.log("Negate\n");
console.log(negate(array4));
console.log("======\n");

function diffMaxMin(array) {
  let difference = 0;
  min = array[0];
  max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
    if (min > array[i]) {
      min = array[i];
    }
  }
  console.log(max, min);
  difference = max - min;
  return difference;
}

let array5 = [10, 4, 1, 4, -10, -50, 32, 21];
console.log("Difference\n");
console.log(diffMaxMin(array5));
console.log("======\n");

function MultiplyByLength(array) {
  let result = [];
  for (number of array) {
    result.push(number * array.length);
  }
  return result;
}
console.log("Multiply By Length\n");
console.log(MultiplyByLength([2, 3, 1, 0]));
console.log(MultiplyByLength([1, 0, 3, 3, 7, 2, 1]));
console.log("======\n");

function hurdleJump(array, jump) {
  if (jump > array.length - 1 || array.length === 0) {
    return true;
  } else return false;
}
console.log("Hurdle Jump\n");
console.log(hurdleJump([1, 2, 3, 4, 5], 5));
console.log(hurdleJump([5, 5, 3, 4, 5], 3));
console.log(hurdleJump([5, 4, 5, 6], 10));
console.log("======\n");

function finalCountdown(n) {
  let result = [];
  for (let i = n; i >= 0; i--) {
    result.push(i);
  }
  return result;
}
console.log("It's the final coundtown - turururu\n");
console.log(finalCountdown(5));
console.log(finalCountdown(1));
console.log("======\n");

function transform(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] += 1;
    } else if (array[i] % 2 === 0) {
      array[i] -= 1;
    }
  }
  return array;
}

console.log("Transform\n");
console.log(transform([1, 2, 3, 4, 5]));
console.log(transform([3, 3, 4, 3]));
console.log(transform([2, 2, 0, 8, 10]));
console.log("======\n");
