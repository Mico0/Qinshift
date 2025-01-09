//* For loops

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let array = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

console.log("========\n");

//* For-Of Loop - designed to loop every item in an array
//* Doesn't reverse, always start from 0 index till the end of the array
for (let day of array) {
  console.log(day);
}

//* Break and Continue
//* break; stops the loop and exits the loop structure
//* continue; jumps over the rest of the code after its execution and jumps over to a new iteration

for (let i = 0; i < 20; i++) {
  if (i > 10) {
    break;
  }
  console.log(i);
}

let index1 = 0;
while (index1 < 30) {
  if (index1 % 2 === 0) {
    index1++;
    continue; //* Will skip the number in the condition and continue with the next index check
  } else {
    console.log(index1);
  }
  index1++;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let num of numbers) {
  if (num === 11) {
    console.log(num);
    break;
  }
}

let mnames = ["Milan", "Trajan", "Sedat", "Mirko", "Rade"];

for (let name of mnames) {
  if (name.startsWith("M")) {
    continue;
  } else console.log(name);
}
