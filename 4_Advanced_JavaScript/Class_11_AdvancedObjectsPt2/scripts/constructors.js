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

function WheeledVehicle(wheels, name) {
  this.wheels = wheels;
  this.name = name;

  this.drive = function () {
    console.log(`Driving on ${this.wheels} wheels`);
  };
}

//! Note to self: Always use FUNCTION keyword when creating methods / functions in objects and constructor functions

WheeledVehicle.prototype = new Vehicle();

let car = new WheeledVehicle(4, "Lancia");

car.price = 3500;
car.id = 1;
car.batch = 666;

car.printVehicle();
car.drive();

//! This will add the function to the prototype, the top one that we inherit from
//! When we override / inherit we change / update / override the values on a higher level from the default prototype ( main model )

WheeledVehicle.prototype.stop = function () {
  console.log(`The vehicle ${this.name} stopped`);
};
console.log(car);
