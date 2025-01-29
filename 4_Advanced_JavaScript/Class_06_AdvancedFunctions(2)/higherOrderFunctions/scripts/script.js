// HIGHER ORDER FUNCTIONS
let studentsDatabase = [
  { firstName: "Bob", lastName: "H", grade: 5, age: 19 },
  { firstName: "Mel", lastName: "B", grade: 2, age: 33 },
  { firstName: "Jill", lastName: "M", grade: 3, age: 15 },
  { firstName: "Lucky", lastName: "J", grade: 5, age: 18 },
  { firstName: "Strike", lastName: "K", grade: 4, age: 16 },
  { firstName: "Eric", lastName: "I", grade: 1, age: 17 },
];
let students2Database = [
  {
    firstName: "Bob",
    lastName: "H",
    grades: [
      { subject: "Math", grade: 2 },
      { subject: "Science", grade: 3 },
    ],
    age: 19,
  },
  {
    firstName: "Mel",
    lastName: "B",
    grades: [
      { subject: "Math", grade: 3 },
      { subject: "Science", grade: 5 },
    ],
    age: 33,
  },
];

function writeNamesInConsole(students) {
  for (let student of students) {
    console.log(`${student.firstName} ${student.lastName}`);
  }
}

// writeNamesInConsole(studentsDatabase);

function writeStudentInfoInCOnsole(students, writeFnc) {
  for (let student of students) {
    writeFnc(student);
  }
}

// writeStudentInfoInCOnsole(studentsDatabase, function (student) {
//   console.log(`${student.firstName} ${student.lastName} ${student.age}`);
// });

studentsDatabase.forEach((student) =>
  console.log(`${student.firstName} ${student.lastName}`)
);

//! forEach() does not return anything
//! Used for iterating over arrays in a shorter, more readable way than a for loop
//! Always used on arrays
//! Unlike for loops, forEach() does not support break or return to exit early
//! It modifies objects inside the array if changed (passed by reference)
//! It does not create a new array (use map() instead for that)
//! If accumulating values (like a sum), reduce() might be a better choice

//! Map student array to object with different formatting

function mapStudentToObj(students) {
  let newStudents = [];
  for (let student of students) {
    newStudents.push({
      fullName: `${student.firstName} ${student.lastName}`,
      age: student.age,
    });
  }
  return newStudents;
}

// console.log(mapStudentToObj(studentsDatabase));

function mapStudentsTo(students, mapFnc) {
  let newStudents = [];
  for (let student of students) {
    newStudents.push(mapFnc(student));
  }
  return newStudents;
}

let result = mapStudentsTo(studentsDatabase, (student) => {
  return {
    fullName: `${student.firstName} ${student.lastName}`,
    age: student.age,
    hasPassed: student.grade >= 3,
  };
});

// console.log(result);

//! map() is a shorter and more structured way to transform an array
//! Always returns a new array with the same length as the original
//! Ideal for restructuring or formatting data
//! Maps each element from one value to another and returns the transformed result
//! Unlike forEach(), map() does not modify the original array
//! Cannot exit early (no break/return like in loops)

let resultz = studentsDatabase.map((student) => {
  return {
    firstName: `${student.firstName}`,
    grade: `${student.grade}`,
    hasPassed: student.grade >= 3,
  };
});

// console.log(resultz);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddEven = numbers.map((number) => {
  return number % 2 === 0 ? "Even" : "Odd";
});

console.log(oddEven);

// let evenOdd = numbers.forEach((number) => {
//   return number % 2 === 0 ? "Even" : "Odd";
// });

// console.log(evenOdd);

//! Filter results from array

function filterAllStudentsWithGrade30orHigher(students) {
  let filteredStudents = [];
  for (let student of students) {
    if (student.grade > 3) {
      filteredStudents.push(student);
    }
  }
  return filteredStudents;
}

// console.log(filterAllStudentsWithGrade30orHigher(studentsDatabase));

function filterBy(students, filterFnc) {
  let filteredStudents = [];
  for (let student of students) {
    if (filterFnc(student)) {
      filteredStudents.push(student);
    }
  }
  return filteredStudents;
}

// console.log(filterBy(studentsDatabase, (student) => student.age >= 18));

//! filter() is used to extract elements that meet a condition
//! It returns a new array that may have fewer elements than the original
//! The callback function must return true (keep element) or false (remove it)
//! Unlike map(), filter() does not modify elements—only selects them
//! filter() vs. map():
//!   - filter() removes unwanted elements, keeping only the ones that match
//!   - map() transforms every element and returns a new array of the same length
//! They can be combined: filter first, then map to transform data

let result1 = studentsDatabase.filter((x) => x.age >= 17);

console.log(result1);
console.log(studentsDatabase.filter((x) => x.grade > 4));

//! filter student by grade and map student to obj

function filterAndMapStudents(students, filterFnc, mapFnc) {
  let newArray = [];
  for (let student of students) {
    if (filterFnc(student)) {
      newArray.push(mapFnc(student));
    }
  }
  return newArray;
}

let result2 = filterAndMapStudents(
  studentsDatabase,
  (x) => x.age > 17,
  (x) => {
    return {
      firstName: `${x.firstName}`,
      lastName: `${x.lastName}`,
      grade: `${x.grade}`,
    };
  }
);

// console.log(result2);

let result3 = studentsDatabase
  .filter((x) => x.age > 17)
  .map((x) => ({ age: x.age, firstName: x.firstName }));
//! small brackets tell the arrow function that this is the return of the function, may interpret the obj {} as a function body

//! filter() first removes students younger than 18
//! map() then transforms the filtered array into a new structure
//! Parentheses () around the object are required because {} is also used for function bodies
//! Without parentheses, JavaScript would misinterpret the arrow function

console.log(result3);

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result4 = numbers1
  .filter((x) => x % 2 === 0)
  .map((x) => x * 10)
  .forEach((x) => console.log(x));

console.log(result4);

//! sort functions
//! compareFnc ( first parameter ) receives 2 arguments
//! sort() sorts the array in place
//! The compare function (compareFnc) takes two arguments (std, std1)
//! It returns a number to determine their order:
//!   - A positive number means the first element (std) comes after the second (std1)
//!   - A negative number means the first element (std) comes before the second (std1)
//!   - Zero means the elements are considered equal in order
//! Ascending sort: std.grade - std1.grade (smaller grades come first)
//! Descending sort: std1.grade - std.grade (larger grades come first)
//! Note: sort() modifies the original array and does not create a new one
//! Edge cases: Sorting numbers as strings can lead to unexpected results (e.g., "10" comes before "2")

let result6 = studentsDatabase.sort((std, std1) => std.grade - std1.grade); //! Ascending sort

console.log(result6);

let result7 = studentsDatabase.sort((std, std1) => std1.grade - std.grade); //! Descending sort

console.log(result7);

//! sort by name - for strings we use localeCompare()
//! sort() by name (string comparison)
//! localeCompare() compares strings and handles locale-specific rules (case, accents)
//! It returns:
//!   - A negative number if the first string comes before the second
//!   - A positive number if the first string comes after the second
//!   - Zero if the strings are equal
//! Default localeCompare() is case-sensitive, so lowercase comes after uppercase
//! You can customize it further with options for case-insensitivity or locale-specific rules

let result8 = studentsDatabase.sort((std, std1) =>
  std.firstName.localeCompare(std1.firstName)
);

console.log(result8);

//! Example with Case-Insensitive Comparison
let result9 = studentsDatabase.sort((std, std1) =>
  std.firstName.localeCompare(std1.firstName, "en", { sensitivity: "base" })
);
console.log(result9);

//! reduce()
//! reduce() is used to accumulate a single result from an array
//! The callback takes two arguments:
//!   - acc (accumulator): stores the accumulated result, initialized with the second argument (0 in this case)
//!   - current: the current element being processed
//! The callback is called for each element in the array, and the accumulator is updated with each iteration
//! In this example, we're summing the numbers in the array
//! You can use reduce() for other operations like multiplying values or flattening arrays
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = numbers2.reduce((acc, current) => (acc += current), 0);

console.log(sum);

//!Example of Using reduce() for Other Operations

let product = numbers2.reduce((acc, current) => acc * current, 1);
console.log(product); // 3628800

let arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let flattened = arrays.reduce((acc, current) => acc.concat(current), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]

let studentNames = studentsDatabase.reduce(
  (acc, current) => (acc += current.firstName + " ,"),
  ""
);

console.log(studentNames);
