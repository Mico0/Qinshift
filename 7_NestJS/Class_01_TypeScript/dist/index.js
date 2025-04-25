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
