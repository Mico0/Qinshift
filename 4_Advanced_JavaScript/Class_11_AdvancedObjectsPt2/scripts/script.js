function Vehicle(id, name, batch, price) {
  this.id = id;
  this.name = name;
  this.batch = batch;
  this.price = price;
  this.company = "move.inc";

  this.printVehicle = () => {
    console.log(
      `${this.id}. ${this.name}, BATCH: ${this.batch}, Price: ${this.price}`
    );
  };
}

let vehicle = new Vehicle(1, "Zastava", 69, 150);

console.log(vehicle);
vehicle.printVehicle();

let wheeledVehicle = Object.create(new Vehicle(1, "Stojadin", 666, 151));

console.log(wheeledVehicle);

wheeledVehicle.drive = function () {
  console.log("Wrooom!");
};

//! Prototype chain

let car = Object.create(wheeledVehicle);
car.fuelTank = 33;
// console.log(car);
// console.log(`------ ${car.name} ------`);
// car.drive();

//! Instead of using Object.create we use __proto__ and directly create a new Vehicle object

let wheeledVehicle1 = {};
wheeledVehicle1.__proto__ = new Vehicle(15, "Nissan", "GT-R", 9000);

console.log(wheeledVehicle1);

console.log(wheeledVehicle1.name);
wheeledVehicle1.__proto__.printVehicle();

wheeledVehicle1.name = "Toyota";

//! Because the printVehicle() function is called from the __proto__ object it returns the initial vehicle name, the one on the top
wheeledVehicle1.__proto__.printVehicle();

wheeledVehicle1.printVehicle = function () {
  console.log("Toyota");
};
