// Type assertion

interface Student {
  firstName: string;
  lastName: string;
  email: string;
}

const studentJohn: Student = {
  firstName: "John",
  lastName: "Doe",
  email: "john@gmail.com",
};

const studentJSON = JSON.stringify(studentJohn);

// If typescript doesn't know what data we pass on as parse and we neeed to explicitly tell typescript what data to expect we use AS
// JSON.parse always returns ANY type
const parsedStudent = JSON.parse(studentJSON) as Student;
const parsedStudent2 = <Student>JSON.parse(studentJSON);

// Generics

const getProducts = async () => {
  return ["shoes", "machines", "books"];
};

const getStock = async (): Promise<number> => {
  return 1;
};

interface Product<T> {
  title: string;
  stock: number;
  metaData: T;
}

interface DishwasherMetadata {
  serialNumber: string;
  capacity: number;
}

interface BlenderMetaData {
  rpm: 1000 | 12000 | 30000;
  gears: 1 | 3 | 5;
}

const washingMachine: Product<DishwasherMetadata> = {
  title: "Whirpool",
  stock: 1200,
  metaData: {
    serialNumber: "L2321",
    capacity: 1230,
  },
};

// Partials

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

const userOne: User = {
  firstName: "Milan",
  lastName: "Ognjanoski",
  email: "milan@email.com",
  age: 31,
};

const updateData: Partial<User> = {
  email: "updatedEmail@gmail.com",
};

console.log(userOne);

// Explicitly telling TS what types to expect as key and value
const dataObj: { [key: string]: string | number } = {};

// keyof

const readUserProperty = (user: User, property: keyof User) => {
  return user[property];
};

console.log(readUserProperty(userOne, "email"));
