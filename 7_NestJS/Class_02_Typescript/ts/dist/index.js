"use strict";
// Type assertion
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const studentJohn = {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
};
const studentJSON = JSON.stringify(studentJohn);
// If typescript doesn't know what data we pass on as parse and we neeed to explicitly tell typescript what data to expect we use AS
// JSON.parse always returns ANY type
const parsedStudent = JSON.parse(studentJSON);
const parsedStudent2 = JSON.parse(studentJSON);
// Generics
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return ["shoes", "machines", "books"];
});
const getStock = () => __awaiter(void 0, void 0, void 0, function* () {
    return 1;
});
const washingMachine = {
    title: "Whirpool",
    stock: 1200,
    metaData: {
        serialNumber: "L2321",
        capacity: 1230,
    },
};
const userOne = {
    firstName: "Milan",
    lastName: "Ognjanoski",
    email: "milan@email.com",
    age: 31,
};
const updateData = {
    email: "updatedEmail@gmail.com",
};
console.log(userOne);
// Explicitly telling TS what types to expect as key and value
const dataObj = {};
// keyof
const readUserProperty = (user, property) => {
    return user[property];
};
