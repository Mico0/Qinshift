const login = document.getElementById("login");
const logout = document.getElementById("logout");
const register = document.getElementById("register");
const registerBtn = document.getElementById("registerAcc");
const loginDiv = document.getElementById("contentLogin");
const logoutDiv = document.getElementById("contentLogout");
const registerDiv = document.getElementById("contentRegister");

let getID = (() => {
  let id = 0;
  return () => ++id;
})();

function User(email, firstName, lastName, password) {
  this.email = email;
  this.firstName = firstName;
  this.lastName = lastName;
  this.password = password;
  this.id = getID();
}

let arrayOfUsers = [
  new User("milan@husse.com", "Milan", "Ognjanoski", "123test"),
  new User("jane@doe.com", "Jane", "Doe", "password456"),
  new User("john@smith.com", "John", "Smith", "securepass"),
  new User("alice@wonderland.com", "Alice", "Liddell", "curious123"),
  new User("bruce@wayne.com", "Bruce", "Wayne", "batmanForever"),
];

function toggleDisplay(showDiv) {
  loginDiv.style.display = showDiv === "login" ? "block" : "none";
  logoutDiv.style.display = showDiv === "logout" ? "block" : "none";
  registerDiv.style.display = showDiv === "register" ? "block" : "none";
}

register.addEventListener("click", () => toggleDisplay("register"));
logout.addEventListener("click", () => {
  toggleDisplay("login");
  let header = document.getElementsByTagName("h2")[0];
  if (header) {
    header.remove();
  }
});

function checkCredentials(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // debugger;
        let isFound = false;
        for (let user of arrayOfUsers) {
          if (username === user.email && password === user.password) {
            isFound = true;
            resolve(`Welcome back ${user.firstName} ${user.lastName}`);
            break;
          }
        }
        if (!isFound) {
          reject("You have entered the WRONG login details");
        }
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  });
}

async function validateCredentials() {
  let username = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  try {
    let response = await checkCredentials(username, password);
    toggleDisplay("logout");
    let header = document.createElement("h2");
    header.innerText = response;
    logoutDiv.prepend(header);
  } catch (error) {
    console.log(error);
  }
}

function registerUser() {
  const registerFirstName = document.getElementById("registerFirstName");
  const registerLastName = document.getElementById("registerLastName");
  const registerEmail = document.getElementById("registerEmail");
  const registerPassword = document.getElementById("registerPassword");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        registerFirstName.value &&
        registerLastName.value &&
        registerEmail.value &&
        registerPassword.value
      ) {
        resolve(
          arrayOfUsers.push(
            new User(
              registerEmail.value,
              registerFirstName.value,
              registerLastName.value,
              registerPassword.value
            )
          )
        );
      } else {
        reject("All fields are required");
      }
    }, 1000);
  });
}

async function handleRegister() {
  try {
    let promise = await registerUser();
    console.log("Registration successfull! Please log in");
    toggleDisplay("register");
    toggleDisplay("login");
  } catch (error) {
    console.log(error);
  }
}

registerBtn.addEventListener("click", handleRegister);

login.addEventListener("click", validateCredentials);
