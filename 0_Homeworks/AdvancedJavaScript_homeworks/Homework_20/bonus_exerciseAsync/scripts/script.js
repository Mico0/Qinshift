const login = document.getElementById("login");
const logout = document.getElementById("logout");
const register = document.getElementById("register");
const registerBtn = document.getElementById("registerAcc");
const loginDiv = document.getElementById("contentLogin");
const logoutDiv = document.getElementById("contentLogout");
const registerDiv = document.getElementById("contentRegister");

const getID = (() => {
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

async function checkCredentials(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = arrayOfUsers.find(
        (u) => u.email === username && u.password === password
      );
      user
        ? resolve(`Welcome back ${user.firstName}`)
        : reject("Incorrect login details");
    }, 1500);
  });
}

async function registerAccount() {
  const firstName = document.getElementById("registerFirstName").value.trim();
  const lastName = document.getElementById("registerLastName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value.trim();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName || !lastName || !email || !password)
        return reject("All fields are required");
      if (arrayOfUsers.some((u) => u.email === email))
        return reject("Email already registered");

      resolve(new User(email, firstName, lastName, password));
    }, 1500);
  });
}

login.addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const message = await checkCredentials(email, password);
    toggleDisplay("logout");
    logoutDiv.innerHTML = `<h2>${message}</h2>`;
  } catch (error) {
    console.log(error);
  }
});

registerBtn.addEventListener("click", async () => {
  try {
    const newUser = await registerAccount();
    arrayOfUsers.push(newUser);
    toggleDisplay("login");
    console.log("User registered:", newUser);
  } catch (error) {
    console.log(error);
  }
});

register.addEventListener("click", () => toggleDisplay("register"));
logout.addEventListener("click", () => toggleDisplay("login"));
