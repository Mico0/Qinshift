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
  let difference,
    min,
    max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
    if (min > parseInt(array[i])) {
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
