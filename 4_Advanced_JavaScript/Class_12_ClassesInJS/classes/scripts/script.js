// function Vehicle(id, name, batch, price){
//     this.id = id;
//     this.name = name;
//     this.batch = batch;
//     this.price = price;
// }

// function WheeledVehicle(id, name, batch, price, wheels){
//     Object.setPrototypeOf(this,new Vehicle(id, name, batch, price));
//     this.wheels = wheels;
// }

// let car = new WheeledVehicle(1,"Yugo",123,500,4);
// console.log(car);

// This was before ECMA script 6 

// After ECMA script 6

class Vehicle {
    constructor(id, name, batch, price, showLog = false) {
        this.id = id;
        this.name = name;
        this.batch = batch;
        this.price = price;
        this.company = "Nissan Motor"

        if (showLog) {
            console.log("Im the constructor of the Vehicle class");
        }
    }

    printVehicle() {
        console.log(`${this.id}. ${this.name}`);
    }
}

// let car = new Vehicle(1,"Nissan GT-R",666,7000, true);
// console.log(car)
// car.printVehicle();

class WheeledVehicle extends Vehicle {
    constructor(id, name, batch, price, wheels) {
        super(id, name, batch, price, true); // this is the constructor of the class that we inherit from, with super we call the constructor from that class
        console.log("I am the constructor of Wheeled Vehicle");
        this.wheels = wheels;
    }
}

// In OOP we can only inherit from one class, we cannot inherit from multiple classes, we can chain inheritence but we cannot inherit from multiple sources

let wheeledVehicle = new WheeledVehicle(2, "Nissan 300Z", 222, 50000, 4);
console.log(wheeledVehicle);
wheeledVehicle.printVehicle();

class Car extends WheeledVehicle {
    constructor(id, name, batch, price, wheels, doors, AC) { // we always pass all of the arguments in the constructor, old - inherited from the first class and the new ones that we want to add
        super(id, name, batch, price, wheels);
        console.log("I am the constructor of Car");
        this.doors = doors;
        this.AC = AC;
        if (AC) {
            this.price += 400;
        }
    }
}

// let car = new Car(1,"Subaru Impreza",232,7000,4,3,true);
// console.log(car);

// A service class is a class that contains functionalities / functions

class BaseService {
    constructor() {

    }
    printArray(arr) {
        arr.forEach(element => {
            console.log(element)
        });
    }
}

class BookService extends BaseService {
    constructor() {
        super();
    }
    showNames(arr) {
        this.printArray(arr);
    }

    // getBooks method

    // updatedBook method

    //....
}

// We do not mix model claasses and service classes, model classes define a model a list of properties that we need to use, service classes only use functionalities

let bookService = new BookService();
bookService.showNames(["Milan", "Trajan"]);

// Static methods - methods that get binded to the TYPE, not to the instance of the Object for exampe to new Object

class ElectricVehicle extends Car {
    constructor(id, name, batch, price, wheels, doors, ac, owner) {
        super(id, name, batch, price, wheels, doors, ac);
        this.owner = owner;
    }
    static addAC(car) {
        if (!car.AC) {
            car.AC = true;
            car.price += 400;
            console.log(`The car has AC now and it costs ${car.price}`);
        } else {
            console.log("The car already has an AC");
        }
    }
}

let electricVehicle = new ElectricVehicle(5, "Tesla", 1121, 50000, 4, 4, false, "Milan");

// electricVehicle.addAC(car);
ElectricVehicle.addAC(electricVehicle); // we call the static method by calling the type / class ElectricVehicle first and then .addAC()
console.log(electricVehicle)

class Helpers {
    static printArray(arr) {
        arr.forEach(element => {
            console.log(element);
        })
    }
    static printString(str) {
        console.log(str)
    }
    static countAllVowelsInString(string) {
        let strArray = string.split("");
        let vowels = ["a", "e", "i", "o", "u"];

        return strArray.filter(char => vowels.includes(char.toLowerCase())).length;
    }
}

// we can use the static methods without instancing an object of that class, without using for example new Helpers

// Helpers.printArray([1, 2, 3, 4, 5, 6]);
// Helpers.printString("Milan");
// console.log(Helpers.countAllVowelsInString("fniwoenfoqirnwqneqwNaaszxui"));

class Airplane {
    constructor(id, name, color, seats) {
        this.seats = seats
        this.id = id;
        this.name = name;
        this.color = color;
    }
    get name(){
        console.log("We are getting the name of the plane, please wait...");
        return `This plane's name is ${this._name}`;
    }
    set name(value){
        console.log(`We are setting the name of the plane. Please wait...`);
        value.length > 1 ? this._name = value : this._name = "Boeing";
    } // the setter is always called when we try to add value to the property

    get color(){
        return this._color;
    }
    set color(value){
        this._color = value;
    }
}

let plane = new Airplane(1, "Crimson Wings","Crimson", 30);

// console.log(plane);
// console.log(plane.name)

console.log("--- Checking type of Object ---");
let electricVehicle1 = new ElectricVehicle(4,"Toyota",232,40000,4,4,true,"Vojo");

let isElectricCar =  electricVehicle1 instanceof ElectricVehicle;
console.log(isElectricCar);

let isElectric = electricVehicle1 instanceof Helpers;
console.log(isElectric);

console.log(electricVehicle1 instanceof Car);