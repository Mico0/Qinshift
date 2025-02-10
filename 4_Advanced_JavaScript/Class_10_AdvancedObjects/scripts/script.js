function Doggo(color, age, name, favoriteFoods) {
  this.name = name === undefined ? "Muki - Default" : name;
  this.color = color;
  this.age = age;
  this.hasOwner = false;
  this.owner = null;
  //* we can use falsy values to check for undefined
  this.favoriteFoods =
    favoriteFoods === undefined ? [new Food("bacon", "red")] : favoriteFoods;

  this.bark = function () {
    console.log(`Bark! Bark!`);
  };

  this.adopt = function (owner) {
    if (!this.hasOwner) {
      this.hasOwner = true;
      this.owner = owner;
      this.owner.hasDog = true;
      console.log(`The dog ${this.name} has a new owner ${this.owner.name}`);
    } else {
      console.log("This dog is already adopred");
    }
  };

  this.eat = function (food) {
    this.favoriteFoods.forEach((feed) => {
      if (feed.name.toLowerCase() === food.name.toLowerCase()) {
        console.log(`** My favourite food **`);
        console.log(``);
      }
    });
    console.log("Nom, nom, chimkuunss");
  };
}

function Food(name, color) {
  this.name = name;
  this.color = color;
}

function Owner(name, age, hasDog = false) {
  this.name = name;
  this.age = age;
  this.hasDog = hasDog;
}

let flash = new Doggo("brown", 1, "Flash", [
  new Food("bacon", "red"),
  new Food("chimkun", "brown-ish"),
  new Food("tuna", "brown"),
]);

let doggy = new Doggo();

console.log(doggy);

let owner = new Owner("Milan", 30);

flash.adopt(owner);

console.log(flash);
