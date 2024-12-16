function tellStory(storyParts) {
  return `This is ${storyParts[0]}, ${storyParts[0]} is a honorable man. Today ${storyParts[0]} is ${storyParts[1]}. ${storyParts[0]} is ${storyParts[2]} all day. The end. \n\nBrought to you by: Quentin Tarantino`;
}
let storyParts = ["Milan", "Meh", "Working"];
console.log(tellStory(storyParts));
console.log("=======\n");

function validateNum(number) {
  if (typeof number === "number") {
    return true;
  } else return false;
}

function checkSum(array) {
  let sum = 0;
  for (let number of array) {
    if (validateNum(number) === true) {
      sum += number;
    } else {
      console.log("This input is not a number, please try again \n");
      sum = 0;
      break;
    }
  }
  return sum;
}

let sumArray = [1, 2, 3, 4];
// console.log(typeof sumArray[0]);
console.log("The sum of the numbers in the array is:", checkSum(sumArray));
console.log("=======\n");

function concatinateStrings(strings) {
  let output = "";
  for (let string of strings) {
    output += string + " ";
  }
  return output;
}

let stringos = [
  "Hello",
  "there",
  "students",
  "of",
  "SEDC",
  "!",
  "Additional",
  "Words",
  "In",
  "The",
  "String",
];
console.log(concatinateStrings(stringos));
console.log("=======\n");

function numbersLoop(range) {
  for (let i = 1; i <= range; i++) {
    if (i % 2 === 0) {
      console.log(`${i}\n`);
    } else console.log(`${i} `);
  }
}

numbersLoop(30);
console.log("=======\n");

function minMax(array) {
  let sum = 0;
  let max = array[0];
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
    if (min > array[i]) {
      min = array[i];
    }
  }
  console.log(max);
  console.log(min);
  sum = max + min;
  return sum;
}

let maximus_minimus = [22, 33, 11, 44, 23, 55, 66, 77];
console.log(
  "The sum of the maximum and minimum element in the array is:",
  minMax(maximus_minimus)
);
console.log("=======\n");

function createList(names, surnames) {
  let result = [];
  if (names.length !== surnames.length) {
    return `Please create the 2 arrays with equal length`;
  } else {
    for (let i = 0; i < names.length; i++) {
      result.splice(i, 0, `${i + 1}. ${names[i]} ${surnames[i]}`);
    }
  }
  return result;
}

let names = ["Milan", "Trajan", "Filip"];
let surnames = ["Ognjanoski", "Stevkovski", "Zlatanovski"];
console.log(createList(names, surnames));
console.log("=======\n");
