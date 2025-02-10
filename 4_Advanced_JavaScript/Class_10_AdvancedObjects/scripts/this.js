console.log(this);

window.console.log("With use of window object");

this.console.log("With use of this as window object");

let obj = {
  whatsThis: this,
};

console.log(obj.whatsThis);

function whatsThis() {
  console.log(this);
}

whatsThis();

let whatIsThis = () => {
  console.log(this);
};

whatIsThis();

let obj2 = {
  whatsThis: this,
  whatIsThisInMethod: function () {
    console.log(this);
  },
};

//* This will point to the object

obj2.whatIsThisInMethod();

function Pet(name) {
  console.log(this);
  this.name = name;

  this.eat = function () {
    console.log(this);
  };
}

let pet = new Pet("Rajko");
pet.eat();

console.log("Arrow functions this \n");

let obj3 = {
  self: this,
  whatsThis: () => {
    console.log(this);
  },
};

obj3.whatsThis();

function testFnc() {
  obj3.whatsThis();
}
testFnc();
