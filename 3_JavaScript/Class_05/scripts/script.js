let obj = {}; // empty object literal
let hotel = {
  name: "Milan",
  rooms: 30,
  booked: 25,
  hasGym: true,
  roomTypes: ["single", "double", "suite"],

  //* Anonymous function
  checkAvailability: function () {
    console.log("Sorry we are booked");
  },
};

console.log(hotel.roomTypes[2]);
console.log(hotel.checkAvailability); //* will print out the property an what it contains
hotel.checkAvailability(); //* will execute the function

let rooms = hotel["rooms"]; //* getting property value with square brackets
console.log(rooms);
hotel["checkAvailability"](); //* Calling functions with square brackets

let me = {
  name: "Milan",
  age: 30,
  occupation: "Wannabe Developer",
  married: true,

  logData: function () {
    console.log(
      `Hello my name is ${this.name}, I'm ${this.age} years old, I work as a ${this.occupation} and am I married? ${this.married}`
    );
  },
};

me.logData();
console.log(me["age"]);
console.log(me.occupation);

let hotel2 = new Object(); //* creating an object with a constructor function

//* dot notation, dynamically adding values to an object
hotel2.name = "Mercure"; //* creating a property and adding value to it, used when creating objects with constructor func.
hotel2.rooms = 50;
hotel2.hasGym = false;
hotel2.roomTypes = ["single"];
hotel2.checkAvailability = function () {
  console.log("Only single rooms available");
};
hotel2["pricePerNight"] = 250;
hotel2.propertyForDelete = true;

delete hotel2.propertyForDelete; //* deletes the property entirely with its value/s
delete hotel2["pricePerNight"];

console.log(hotel2);

let persons = {
  firstName: ["Milan"],
  lastName: "Ognjanoski",
};

//* changing values of properties in an object
persons.firstName.push("Sedat");
persons["lastName"] = "I dont know";

console.log(persons);

me.name = "Sedat";
me["age"] = 23;
me.occupation = "Casovnicar";
me["married"] = false;
me.logData();

let trainer = {
  name: "Trajan",
  lastName: "Stevkovski",
  academy: "Qinshift Academy",
  lecture: "Javascript - Basics",
};

delete trainer.lecture;

console.log(trainer);

trainer.age = 37; //* create a new property named age on the already existing object and add value of 37

trainer.getFullName = function () {
  console.log(`${trainer["name"]} ${trainer.lastName}`);
};

trainer.getFullName();

//* CONSTRUCTOR FUNCTIONS

function Hotel(name, rooms, booked) {
  this.hotelName = name; // this works too
  this.rooms = rooms;
  this.booked = booked;

  this.checkAvailability = function () {
    return this.rooms - this.booked;
  };
}

let hotel5 = new Hotel("Holiday Inn", 100, 89);

console.log(hotel5);
console.log(hotel5.checkAvailability());

let hotel6 = new Hotel();
hotel6.hotelName = "Mariott";
hotel6["rooms"] = 200;
hotel6.booked = 150;
console.log(hotel6);
console.log(hotel6.checkAvailability());
