function Vehicle(id,name){
    this.id = id;
    this.name = name;
    this.color = undefined;

    this.printInformation = function(){
        throw new Error("Not implemented")
    }
}

function Car(id,name,hp){
    Object.setPrototypeOf(this,new Vehicle(id,name));
    this.hp = hp;

    this.printInformation = function(){
        console.log("In car");
    }
}

let car = new Car(1,"Volkswagen", 164);
car.printInformation();

Vehicle.prototype.changeColor = function (color){
    console.log(this);
    console.log(color);
}

// console.log(car);
// car.changeColor("yellow");

String.prototype.firstLetterUppercase = function(){
    console.log(this);
    let newValue = [];
    for(let i = 0;i<this.length;i++){
        newValue.push(this[i].toUpperCase());
    }

    return newValue
}

let str = "milan";
console.log(str.firstLetterUppercase());

// basically we can use Object(String,Array,Object).prototype to add methods to the parent prototype / to the constructor function