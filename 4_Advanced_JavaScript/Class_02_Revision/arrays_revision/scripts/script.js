let arr = [];

let arr1 = [1, "Milan", [1, 2, 3], { firstName: "Milan" }];

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayOfObjects = [
  {
    name: "Trajan",
    grades: [1, 2, 3, 4, 5, 6],
  },
  {
    name: "Trajan",
    grades: [1, 2, 3, 4, 5, 6],
  },
  {
    name: "Trajan",
    grades: [1, 2, 3, 4, 5, 6],
  },
  {
    name: "Trajan",
    grades: [1, 2, 3, 4, 5, 6],
  },
  {
    name: "Trajan",
    grades: [1, 2, 3, 4, 5, 6],
  },
];

console.log(arrayOfObjects);

function getStudent() {
  let name = "Milan";
  let age = 30;
  let address = "N/A";

  return [name, age, address];
}

console.log(getStudent());

let secondElement = arrayOfObjects[2];
console.log(secondElement);

arrayOfObjects[arrayOfObjects.length] = {
  name: "Milan",
  grades: [1, 2, 3, 4],
};
