let btn = document.getElementById("submit");
let database = [];

function Student(firstName, lastName, age, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
}

function populateDB() {
  let firstNameField = document.getElementById("firstName");
  let lastNameField = document.getElementById("lastName");
  let ageField = document.getElementById("age");
  let emailField = document.getElementById("email");

  let firstName = firstNameField.value.trim();
  let lastName = lastNameField.value.trim();
  let age = ageField.value.trim();
  let ageValue = parseInt(age);
  let email = emailField.value.trim();

  if (
    firstName === "" ||
    lastName === "" ||
    ageValue === 0 ||
    isNaN(ageValue) ||
    email === ""
  ) {
    alert("Please fill all fields properly");
    return;
  } else {
    let databaseObj = new Student(firstName, lastName, ageValue, email);
    database.push(databaseObj);

    // console.log(database)
    console.table(database);
    firstNameField.value = "";
    lastNameField.value = "";
    ageField.value = "";
    emailField.value = "";
  }
}

btn.addEventListener("click", populateDB);
