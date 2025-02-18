class Animal {
  constructor(name, type, age, size) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.size = size;
    this.isEaten = false;
  }
  eat(input) {
    if (input instanceof Animal) {
      if (this.type === "herbivore") {
        console.log(
          `The animal ${this.name} is a herbivore and does not eat other animals.`
        );
      }
      if (this.type !== "herbivore" && input.size < this.size) {
        this.isEaten = true;
        console.log(`The animal ${this.name} ate the ${input.name}`);
      }
      if (input.size * 2 > this.size) {
        this.isEaten = false;
        console.log(
          `The animal ${this.name} tried to eat the ${input.name} but it was too large`
        );
      }
    } else {
      console.log(`The animal ${this.name} is eating the ${input.name}`);
    }
  }
}

let cat = new Animal("Cat", "carnivore", 3, 46);
let dog = new Animal("Dog", "carnivorem", 4, 110);
let parrot = new Animal("Parrot", "herbivore", 2, 20);

let mouse = {
  name: "Mouse",
  type: "omnivore",
  age: 5,
  size: 12,
};

console.log(cat);
cat.eat(parrot);
cat.eat(dog);
parrot.eat(mouse);
