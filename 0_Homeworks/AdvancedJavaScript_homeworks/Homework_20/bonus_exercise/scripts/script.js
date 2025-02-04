const login = document.getElementById("login");
const logout = document.getElementById("logout");
const register = document.getElementById("register");
const registerBtn = document.getElementById("registerAcc");
const loginDiv = document.getElementById("contentLogin");
const logoutDiv = document.getElementById("contentLogout");
const registerDiv = document.getElementById("contentRegister");
const content = document.getElementById("content");
let arrayOfUsers = [];

getID = (function () {
  let id = 0;
  return function () {
    return ++id;
  };
})();

function User(email, firstName, lastName, password) {
  this.email = email;
  this.firstName = firstName;
  this.lastName = lastName;
  this.password = password;
  this.id = getID();
}

function loginDisplay(message) {
  loginDiv.style.display = "none";
  logoutDiv.style.display = "block";
  logout.style.display = "block";
  registerDiv.style.display = "none";
  header = document.createElement("h2");
  header.innerText = message;
  logoutDiv.prepend(header);
}

function logoutDisplay() {
  loginDiv.style.display = "block";
  logoutDiv.style.display = "none";
  registerDiv.style.display = "none";
  document.getElementsByTagName("h2")[0].remove();
}

function registerDisplay() {
  registerDiv.style.display = "block";
  loginDiv.style.display = "none";
  logoutDiv.style.display = "none";
}

arrayOfUsers = [
  new User("milan@husse.com", "Milan", "Ognjanoski", "123test"),
  new User("jane@doe.com", "Jane", "Doe", "password456"),
  new User("john@smith.com", "John", "Smith", "securepass"),
  new User("alice@wonderland.com", "Alice", "Liddell", "curious123"),
  new User("bruce@wayne.com", "Bruce", "Wayne", "batmanForever"),
];

// console.log(arrayOfUsers);

function checkCredentials(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isFound = false;
      for (let user of arrayOfUsers) {
        if (username === user.email && password === user.password) {
          isFound = true;
          console.log(user.email, user.password);
          resolve(`Welcome back ${user.firstName}`);
          break;
        }
      }
      if (!isFound) {
        reject("You have entered the WRONG login details");
      }
    }, 2000);
  });
}

login.addEventListener("click", function () {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  checkCredentials(email.value, password.value)
    .then((message) => {
      console.log(message);
      loginDisplay(message);
    })
    .catch((error) => console.log(error));
});

function registerAccount() {
  const registerFirstName = document.getElementById("registerFirstName");
  const registerLastName = document.getElementById("registerLastName");
  const registerEmail = document.getElementById("registerEmail");
  const registerPassword = document.getElementById("registerPassword");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let emailExists = arrayOfUsers.some(
        (el) => el.email === registerEmail.value
      );
      if (
        registerFirstName.value &&
        registerLastName.value &&
        registerEmail.value &&
        registerPassword.value &&
        !emailExists
      ) {
        resolve(
          new User(
            registerEmail.value,
            registerFirstName.value,
            registerLastName.value,
            registerPassword.value
          )
        );
      }
      if (emailExists) {
        reject("An account with this e-mail has already been registered");
      } else {
        reject("All fields are required");
      }
    }, 1500);
  });
}

registerBtn.addEventListener("click", function () {
  registerAccount()
    .then((response) => {
      arrayOfUsers.push(response);
      loginDiv.style.display = "block";
      registerDiv.style.display = "none";
      console.log(arrayOfUsers);
    })
    .catch((error) => console.log(error));
});

register.addEventListener("click", registerDisplay);

logout.addEventListener("click", logoutDisplay);
