console.log("this is from the typescript file");

let firstName = "Milan";

// Primitive data types in typescript

const lastName: string = "Ognjanoski";

let age: number = 31;

console.log(age);

// Always add types to variables that are not initialized
const isStudentReady: boolean = true;

const empty = null;

let academyName: string;

let donTuseMe: any = "I will break your code";

donTuseMe = 123;

// Object types

const user: { firstName: string; title: string; age: number } = {
  firstName: "Milan",
  title: "Developer",
  age: 31,
};

// Modeling types of objects

type User = {
  firstName: string;
  title: string;
  age: number;
  // Putting a question mark before the type in the property makes it optional
  city?: string;
};

const userTwo: User = {
  firstName: "Borche",
  title: "Developer",
  age: 32,
  city: "San Francisco",
};

const userThree: User = {
  firstName: "Bob",
  title: "Designer",
  age: 32,
};

// Arrays

const fruits: string[] = ["a", "b", "c"];

// console.log(fruits);

const grades: number[] = [1, 2, 3, 4, 5];

const combined = [...grades, ...fruits];

const users: User[] = [userTwo, userThree];

users.push({
  firstName: "Rade",
  title: "QA",
  age: 22,
});

console.log(users);

// Union types

let academyTitle: string | number = "SEDC";
// Be careful and dont overuse union types, specifically primitive types

type AcademyTitle = "programming" | "design" | "networks";

const acaTtitle: AcademyTitle = "networks";

//! AVOID THIS(UNION TPYES IN ARRAYS)
const mixedArray: (string | number)[] = [1, 2, 3, 4, "Milan"];

//TODO magic strings

// ENUMS
enum Classic {
  TYPE_ONE,
  TYPE_TWO,
  TYPE_THREE,
}

console.log(Classic.TYPE_TWO);

enum Status {
  ACTIVE = "active",
  ON_HOLD = "on-hold",
  CNCELLED = "cancelled",
}

console.log(Status.ON_HOLD);

type Device = {
  title: string;
  status: Status;
};

// Functions

const addTwoNumbers = (numOne: number, numTwo: number) => {
  return numOne + numTwo;
};

function subtract(numOne: number, numTwo: number) {
  return `The result of subtraction is ${numOne / numTwo}`;
}

// Functions that dont have a return keyword have a void return type
const printFUllName = (firstName: string, lastName: string): void => {
  console.log(`${firstName} ${lastName}`);
};

printFUllName("Milan", "Ognjanoski");

// ?: is used to make arguments in fucntions optional
const sayHello = (name?: string) => {
  console.log(`${name || "User"} says hello`);
};

sayHello("John");
sayHello();

const printAcademy = (academy: AcademyTitle, length = 12) => {
  console.log(`The academy ${academy} lats for ${length} months`);
};

printAcademy("programming", 6);

//Interfaces

interface Product {
  title: string;
  stock: number;
  description: string;
  category: string;
  price: number;
  rating?: number;

  // Void returns in methods in interfaces and objects are more flexible then function types and you can return anything
  printInfo: () => void;
}

const shoes: Product = {
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

interface Person {
  firstName: string;
  lastName: string;

  getFullName(): String;
}

// Interfaces can be extended but cant be combined with &
interface Professional extends Person {
  jobTitle: string;
  salary: number;
}

const mechanic: Professional = {
  firstName: "Sedat",
  lastName: "Mustafa",
  jobTitle: "SEO expert",
  salary: 800,

  getFullName() {
    return `${this.firstName} : ${this.jobTitle}`;
  },
};

console.log(mechanic.getFullName());

type Programmer = Person &
  Professional & {
    programmingLanguage: string;
  };

// Classes

// modern ts syntax for working with constructors
class Laptop implements Product {
  serialNumber: string = "LWQ23QG343";
  productionYear = 2023;

  constructor(
    public title: string,
    public stock: number,
    public description: string,
    public category: string,
    public price: number,
    public rating: number
  ) {}
  printInfo() {}
}
