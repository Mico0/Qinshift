function Human(firstName, lastName, age, height) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.height = height;

  this.showInfo = function () {
    return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
  };

  this.allowSlide = function (age, height) {
    if (this.age > 18 && this.height >= 180) {
      return `${this.firstName} can go on the waterslide`;
    } else {
      return `${this.firstName} is not allowed on the waterslide`;
    }
  };
}

let person = new Human("Milan", "Ognjanoski", 30, 182);

// console.log(person.showInfo());
// console.log(person.allowSlide());

function Hotel(
  hotelName,
  hotelStars,
  location,
  typeOfRooms = ["single", "twin", "double", "suite", "presidental", "deluxe"],
  availableRooms,
  bookedRoom
) {
  this.hotelName = hotelName;
  this.hotelStars = hotelStars;
  this.location = location;
  this.typeOfRooms = typeOfRooms;
  this.availableRooms = availableRooms;
  this.bookedRoom = bookedRoom;

  this.hotelInfo = function () {
    return `${this.hotelName} is a ${this.hotelStars} star hotel and is located in ${this.location}`;
  };
}

let hotel = new Hotel("Mercure", 3, "Tetovo", ["single", "twin"], 4, 22);

console.log(hotel);
