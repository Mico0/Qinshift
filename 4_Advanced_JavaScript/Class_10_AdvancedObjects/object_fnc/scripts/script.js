let object = {
  name: "Boxer",
  isHappy: true,
  bark: function () {
    console.log("Bark! Bark!");
  },
};

let dog = Object.create(object);

dog.isHappy = false;
dog.name = "Speedy";
// console.log(dog);
// dog.bark();

let dog2 = {
  ...dog,
};

dog2.name = "Dzoni";
dog2.isHappy = true;
// console.log(dog2);

//* =====================================================

let person = {
  name: "Milan",
};

let address = {
  street: "Street 1",
  number: 12,
  contactPerson: "Milan",
};

let otherAddress = {
  street: "Street 2",
  number: 23,
  contactPerson: "Dzoni",
};

//* assign returns a new object
let personWithAddress = Object.assign(person, otherAddress);

// console.log(personWithAddress);

//* if the properties are with the same keys it just updates the property values
let updatedAddress = Object.assign(personWithAddress, address);

// console.log(updatedAddress);

let personWithAddressSpread = {
  ...person,
  ...otherAddress,
};
// console.log(personWithAddressSpread);

let updatedAddressSpread = {
  ...personWithAddressSpread,
  ...address,
};
// console.log(personWithAddressSpread);

//* ===========================================================================

let apiSecrets = {
  apiKey: "some random string",
  userToken: ``,
  userSecrets: ``,
  encoding: ``,
  font: ``,
};

Object.freeze(apiSecrets);

apiSecrets.apiKey = "new value";

delete apiSecrets.font;

apiSecrets.url = "url";

// console.log(apiSecrets);

// console.log(Object.isFrozen(apiSecrets));

//* ==================================================================================

let apiSecrets1 = {
  apiKey: "some random string",
  userToken: ``,
  userSecrets: ``,
  encoding: ``,
  font: ``,
};

Object.seal(apiSecrets1);

apiSecrets1.font = "New font";
apiSecrets1.url = "url";

// console.log(apiSecrets1);

//* ==================================================================================

let obj = {
  firstName: "Milan",
  lastName: "Ognjanoski",
  age: 30,
  academy: "Web development",
  courses: ["Javascript", "Node.js", "React.js", "Typescript"],
};

for (let course of obj.courses) {
  console.log(course);
}

console.log("\n");

for (let key in obj) {
  console.log(key);
}

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// for (let key in obj) {
//   console.log("Key: ", key);
//   console.log("Value: ", obj[key]);
// }

// for (let [key, value] of Object.entries(obj)) {
//   console.log(key);
//   console.log(value);
// }

function fibonacci(number) {
  if (number <= 1) {
    return 1;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

// console.log(new Date());

// let firstResult = fibonacci(40);

// console.log(firstResult);

// console.log(new Date());

let results = {
  0: 1,
  1: 1,
};

function fibonacciObj(n) {
  if (results[n]) {
    return results[n];
  } else {
    let result = fibonacciObj(n - 1) + fibonacciObj(n - 2);
    results[n] = result;
    return result;
  }
}
console.log(new Date());
console.log(fibonacciObj(46));
console.log(results);
console.log(new Date());
