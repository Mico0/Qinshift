function windowSize() {
  let height = this.innerHeight;
  let width = this.innerWidth;
  console.log("In function");
  console.log(this);
  return [height, width];
}

console.log(windowSize());
// console.log(window);
let shape = {
  width: 600,
  height: 400,
  getArea: function () {
    // console.log(this);
    return this.width * this.height;
  },
};

console.log(shape.getArea());

let width = 600;
let screen = { width: 400 };

function showWidth() {
  console.log(this);
  console.log(this.width);
}
// in background showWIdth will be added in the window object
// window.showWidth=showWidth;

showWidth();

// screen.showWidth = showWidth; // this assigns the reference to the showWidth function, or we can use the showWidth function in the screen object
// screen.showWidthExecuted = showWidth(); // this assigns the results of the function executing

screen.showWidth = showWidth;
screen.showWidth();
console.log(screen);

function Car(model, color, year, fuel, fuelConsumption) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.fuel = fuel;
  this.fuelConsumption = fuelConsumption;

  this.calculateDistance = function (distance) {
    return distance * (this.fuelConsumption / 100);
  };
}

let car = new Car("Lancia", "Brown", 2005, "Diesel", 5.6);
console.log(car);
console.log(car.calculateDistance(200));
let car2 = new Car();

car2.model = "Golf 2 - GTI";
car2.color = "Red";
car2.year = 2007;
car2.fuel = "Petrolium";
car2.fuelConsumption = 8;

console.log("Car 2 needed fuel: ", car2.calculateDistance(250));
