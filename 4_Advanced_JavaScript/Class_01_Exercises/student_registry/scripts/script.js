let btn = document.getElementById("submit");
let database = [];

function Student(firstName, lastName, age, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
}

function populateDB() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  if (firstName === "" || lastName === "" || age === 0 || email === "") {
    console.log("Please fill all fields");
    return;
  }
  let databaseObj = new Student(firstName, lastName, age, email);
  database.push(databaseObj);

  console.log(database);
}

btn.addEventListener("click", populateDB);
