function Vehicle(id, name, batch, price) {
  this.id = id;
  this.name = name;
  this.batch = batch;
  this.price = price;
  this.company = "move.inc";

  this.printVehicle = function () {
    console.log(
      `${this.id}. ${this.name}, BATCH: ${this.batch}, Price: ${this.price}`
    );
  };
}

function WheeledVehicle(id, name, batch, price, wheels) {
  this.__proto__ = new Vehicle(id, name, batch, price);
  this.wheels = wheels;

  this.drive = function () {
    console.log("Wwrrrooom!");
  };
}

function Motorcycle(id, name, batch, price, wheels, color) {
  Object.setPrototypeOf(this, new Vehicle(id, name, batch, price));
  this.wheels = wheels;
  this.color = color;

  this.driveOnOneWheel = function () {
    console.log("Wheelie!");
  };
}

function Tractor(id, name, batch, price, wheels, hasEquipment, fuelType) {
  Object.setPrototypeOf(
    this,
    new WheeledVehicle(id, name, batch, price, wheels)
  );
  this.hasEquipment = hasEquipment;
  this.fuelType = fuelType === 1 ? "diesel" : "petrol";
  this.color = "red";
  this.brand = "Ferguson";
}

let wheeledVehicle2 = new WheeledVehicle(1, "Lancia", 1994, 2500, 4);

console.log(wheeledVehicle2);

let motorcycle = new Motorcycle(2, "Yamaha", 2000, 6000, 2, "green");

console.log(motorcycle);

let tractor = new Tractor(4, "Le Tractor", 2, 15000, 4, true, 1);
tractor.__proto__.__proto__.company = "Tractor Company";
console.log(tractor);

function Airplane(id, price, wheels, color) {
  Object.setPrototypeOf(this, new Vehicle(id, "Airbus", "NO123", price));
  this.wheels = wheels;
  this.color = color;
}

//! If we want to update a property that we do not pass on as a parameter we can simply override it

let airplane = new Airplane(1, 70000, 3, "red with black stripes");

console.log(airplane);

let serviceConstants = {
  apiToken: "API_TOKEN",
  userSecrets: {
    secret1: "API_SECRET",
    secret2: "",
    secret3: "",
  },
};

let service = {
  getUsers: function () {
    console.log("Get Users");
  },
  getUsersById: function (id) {
    console.log(id);
  },
};

Object.setPrototypeOf(service, serviceConstants);

//! Inheritace can be also used in objects, for example to get easier access to the functionalities or some properties of one or the other object
//! A common use case for inheritance is when something needs to be re-worked, real life example encryption / decryption of messagess

console.log(service);
