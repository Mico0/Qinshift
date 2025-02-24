let simpleArray = [1, 2, 3, 4, 5, 6, [7, 8, 9]];

let students = new Map();
students.set("Milan", "Ognjanoski");

// the keys in the Map are always unique for every entry
//TODO: Try the unique values problem with Map

// if we re-set the unique key it will update the value
students.set("Milan", "Daheck");
students.set("Filip", "Something");
students.set("Clifford", "Smith");

console.log(students);

let student1 = students.get("Filip");
console.log(student1);

let exists = students.has("Bob"); // we usually use this to check if we already have some key so that we dont override it
console.log(exists);

// checking the length of the Map

console.log(students.size);

// delete a record from the Map
// students.delete("Filip");

// // clear map - clears the whole Map
// students.clear();

for (let keyValue of students) {
  console.log("Value is: ", keyValue);
}

for (let [key, value] of students) {
  console.log("Key: ", key);
  console.log("Value:", value);
}

class Employee {
  constructor(id, name, position, salary) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}
let john = new Employee(1, "John", "Developer", 100);
let cliff = new Employee(1, "Cliff", "Developer", 200);
let angela = new Employee(1, "Angela", "Developer", 300);
let bob = new Employee(1, "Bob", "Developer", 400);
let jill = new Employee(1, "jill", "Design", 200);
let jane = new Employee(1, "jane", "Design", 300);
let ramko = new Employee(1, "ramko", "Design", 500);
let burt = new Employee(1, "burt", "QA Tester", 100);
let nikola = new Employee(1, "nikola", "QA Tester", 200);

let employees = [john, cliff, angela, bob, jill, jane, ramko, burt, nikola];

let mapEmployees = new Map();
for (let employee of employees) {
  if (mapEmployees.has(employee.position)) {
    let employees = mapEmployees.get(employee.position);
    mapEmployees.set(employee.position, [...employees, employee]);
  } else {
    mapEmployees.set(employee.position, [employee]);
  }
}

console.log(mapEmployees);
let developers = mapEmployees.get("Developer");
for (let empl of developers) {
  console.log(empl);
}

// SET
// creating Set
let mySet = new Set();

// Adding values
mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet);

mySet.add(2); // adds the 2 but we only have unique values

// Check if value exists
// console.log(mySet.has(2));
// console.log(mySet.has(7));

// check size/length
console.log(mySet.size);

// remove value
// mySet.delete(2);

// clear set
// mySet.clear();

// return array of key value pairs
let a = mySet.entries();
// console.log(a);

let values = mySet.values();
// console.log(values);

// for(let value of mySet) {
//     console.log(value);
// }

let numbers = [
  1, 2, 3, 4, 4, 4, 4, 5, 1, 2, 3, 5, 10, 12, 11, 10, 1, 2, 3, 4, 5,
];

let numbersSet = new Set(numbers);
let unique1 = [...new Set(numbers)];
console.log(unique1);
console.log(numbersSet);
