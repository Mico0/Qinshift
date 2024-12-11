let arr = []; // empty array

let arr1 = [1, 2, 3, 4, 5, 6]; // populated array with numbers

let names = ["Milan", "Sedat"]; // convention of naming arrays is to always use plurar names

let element = arr1[2]; // accessing an element of the array (get value)

console.log(element);

arr[2] = 101; // set value of an element on index num 2

console.log(arr[2]);

let lengthOfArray = arr1.length;
console.log(lengthOfArray);

//* adding elements using .length

let numbers = [1, 2, 3, 4, 5];
numbers[numbers.length] = 6;

//* adding elements using .push()

names.push("Trajan"); // adds an element on the end of the array as the last element

names.push("Rasko", "Macko"); // .push() can be used to add multiple elements as well

console.log(names);

//* adding items to the beginning of the array using unshift()

numbers.unshift(1234);
console.log(numbers);

numbers.unshift(201, 202, 203);
console.log(numbers);

//TODO: Do this manually

//* Deleting items from an array
//* pop() allows you to remove an item from the end of an array
//* pop() returns the removed item

let lastEelement = numbers.pop();
console.log(lastEelement);
console.log(numbers);

//* removing element from the beginning of an array
//* we use shift()

let firstElement = numbers.shift();
console.log(firstElement);
console.log(numbers);
