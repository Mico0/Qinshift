let loginChoice = document.getElementById("login");
let registerChoice = document.getElementById("register");
let register_form = document.querySelector(".register-form");
let login_form = document.querySelector(".login-form");
function showLoginForm() {
  login_form.classList.add("active");
  register_form.classList.remove("active");
}

function showRegisterForm() {
  register_form.classList.add("active");
  login_form.classList.remove("active");
}

loginChoice.addEventListener("click", showLoginForm);
registerChoice.addEventListener("click", showRegisterForm);

let registerBtn = document.getElementById("registerRedirect");
let results = [];
registerBtn.addEventListener("click", checkRegisterFields);
function checkRegisterFields() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;

  // console.log("Username length", username.length);
  // console.log("Password", password);
  // console.log("Email", email);
  // console.log("Age", age);

  if (username.length >= 25) {
    document.getElementById("validationMessage-1").style.display =
      "block !important";
    document.getElementById("validationMessage-1").innerText =
      "Username is too long";
  } else if (!email.includes("@")) {
    document.getElementById("validationMessage-2").style.display =
      "block !important";
    document.getElementById("validationMessage-2").innerText =
      "Please enter a valid e-mail address";
  } else if (password.length < 8) {
    document.getElementById("validationMessage-3").style.display =
      "block !important";
    document.getElementById("validationMessage-3").innerText =
      "Please enter a longer password";
  } else if (age < 18) {
    document.getElementById("validationMessage-4").style.display =
      "block !important";
    document.getElementById("validationMessage-4").innerText =
      "You must be over 18 years old to register";
    registerBtn.removeEventListener("click", checkRegisterFields);
  } else {
    results.push({
      username: username,
      email: email,
      password: password,
      age: age,
    });
    showLoginForm();
  }
  console.log(results);
}

function checkUser() {
  let usernameLogin = document.getElementById("usernameLogin").value;
  let passwordLogin = document.getElementById("passwordLogin").value;
  for (let i = 0; i < results.length; i++) {
    console.log(
      "Username: ",
      results[i].username + "\nPassword:",
      results[i].password
    );
    if (
      usernameLogin === results[i].username &&
      passwordLogin === results[i].password
    ) {
      document.getElementById("validationMessage-6").style.display =
        "block !important";
      document.getElementById("validationMessage-6").innerText =
        "Login successfull!";
    } else {
      document.getElementById("validationMessage-6").style.display =
        "block !important";
      document.getElementById("validationMessage-6").innerText =
        "Try again with the correct credentials";
    }
  }
}

let loginBtn = document.getElementById("loginCheck");
loginBtn.addEventListener("click", checkUser);
