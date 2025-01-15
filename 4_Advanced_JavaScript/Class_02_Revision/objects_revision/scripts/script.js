// Object literal

let obj = {}; // empty object

// adding properties . notation
obj.firstName = "Milan";
console.log(obj.firstName);

// adding properties with square bracket notation
obj["lastName"] = "Ogjnanoski";
console.log(obj.lastName);

let obj2 = {
  title: "Lord of The Rings",
  duration: "3 hours",

  getTitle: function () {
    return this.title;
    // this is always used in object functions so that the functions knows that the return value is from the object
  },
};

console.table(obj2);

// using new Object

let obj3 = new Object();

// we must always use square bracket or dot notation to add properties

obj3.firstName = "Gordana";
obj3["lastName"] = "Ognjanoska";
obj3.movieInfo = obj2;

console.log(obj3);

function Student(firstName, lastName, dob, address, town) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
  this.address = !address ? "Unknown" : address;
  this.town = town;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

function getFullName(student) {
  return `${student.firstName} ${student.lastName}`;
}

let student = new Student("Milan", "Ognjanoski", 1994);

let fullName = student.getFullName();

let fullName2 = getFullName(student);

let fullName3 = getFullName(obj);

student.academy = {
  name: "Web Programming",
  address: "Some address",
  capacity: 1000,
};

console.log(student);
