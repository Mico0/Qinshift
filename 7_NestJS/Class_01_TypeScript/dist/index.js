"use strict";
console.log("this is from the typescript file");
let firstName = "Milan";
// Primitive data types in typescript
const lastName = "Ognjanoski";
let age = 31;
console.log(age);
// Always add types to variables that are not initialized
const isStudentReady = true;
const empty = null;
let academyName;
let donTuseMe = "I will break your code";
donTuseMe = 123;
// Object types
const user = {
    firstName: "Milan",
    title: "Developer",
    age: 31,
};
const userTwo = {
    firstName: "Borche",
    title: "Developer",
    age: 32,
    city: "San Francisco",
};
const userThree = {
    firstName: "Bob",
    title: "Designer",
    age: 32,
};
// Arrays
const fruits = ["a", "b", "c"];
// console.log(fruits);
const grades = [1, 2, 3, 4, 5];
const combined = [...grades, ...fruits];
const users = [userTwo, userThree];
users.push({
    firstName: "Rade",
    title: "QA",
    age: 22,
});
console.log(users);
// Union types
let academyTitle = "SEDC";
const acaTtitle = "networks";
//! AVOID THIS(UNION TPYES IN ARRAYS)
const mixedArray = [1, 2, 3, 4, "Milan"];
//TODO magic strings
// ENUMS
var Classic;
(function (Classic) {
    Classic[Classic["TYPE_ONE"] = 0] = "TYPE_ONE";
    Classic[Classic["TYPE_TWO"] = 1] = "TYPE_TWO";
    Classic[Classic["TYPE_THREE"] = 2] = "TYPE_THREE";
})(Classic || (Classic = {}));
console.log(Classic.TYPE_TWO);
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status["ON_HOLD"] = "on-hold";
    Status["CNCELLED"] = "cancelled";
})(Status || (Status = {}));
console.log(Status.ON_HOLD);
// Functions
const addTwoNumbers = (numOne, numTwo) => {
    return numOne + numTwo;
};
function subtract(numOne, numTwo) {
    return `The result of subtraction is ${numOne / numTwo}`;
}
// Functions that dont have a return keyword have a void return type
const printFUllName = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};
printFUllName("Milan", "Ognjanoski");
// ?: is used to make arguments in fucntions optional
const sayHello = (name) => {
    console.log(`${name || "User"} says hello`);
};
sayHello("John");
sayHello();
const printAcademy = (academy, length = 12) => {
    console.log(`The academy ${academy} lats for ${length} months`);
};
printAcademy("programming", 6);
const shoes = {
    title: "Sneakers",
    stock: 120,
    description: "Very fancy sneakers",
    category: "Footwear",
    price: 300,
    rating: 9.2,
    printInfo() {
        console.log(`${this.title} : ${this.description}`);
    },
};
shoes.printInfo();
const mechanic = {
    firstName: "Sedat",
    lastName: "Mustafa",
    jobTitle: "SEO expert",
    salary: 800,
    getFullName() {
        return `${this.firstName} : ${this.jobTitle}`;
    },
};
console.log(mechanic.getFullName());
// Classes
// modern ts syntax for working with constructors
class Laptop {
    constructor(title, stock, description, category, price, rating) {
        this.title = title;
        this.stock = stock;
        this.description = description;
        this.category = category;
        this.price = price;
        this.rating = rating;
        this.serialNumber = "LWQ23QG343";
        this.productionYear = 2023;
    }
    printInfo() { }
}
