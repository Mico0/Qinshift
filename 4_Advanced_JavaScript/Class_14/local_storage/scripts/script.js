//! Session Storage
//! Used for storing temporary data that lasts only while the browser tab is open
//! Commonly used to store authentication tokens or temporary user session data

// Storing a simple key-value pair in session storage
sessionStorage.setItem("username", "Milan");

// Storing an object in session storage (must be converted to a string using JSON.stringify)
let object = {
  firstName: "Milan",
  lastName: "Ognjanoski",
};

sessionStorage.setItem("userInfo", JSON.stringify(object));

// Retrieving the stored object as a string
let userInfo = sessionStorage.getItem("userInfo");

//! JSON.parse is used to convert the string back into a usable JavaScript object
console.log(JSON.parse(userInfo)); // Output: { firstName: "Milan", lastName: "Ognjanoski" }

//! Clearing all session storage data
// sessionStorage.clear(); // Uncomment to remove all session storage data

//! Local Storage
//! Works similarly to session storage but persists even after the browser is closed
//! Commonly used for storing user preferences, theme settings, or authentication tokens (non-sensitive)

// Storing a token (or any persistent data) in local storage
localStorage.setItem("userToken", "120dj02jd2fj12fjeee0233nn");

// Retrieving the stored token
let token = localStorage.getItem("userToken");
console.log(token); // Output: "120dj02jd2fj12fjeee0233nn"

//! Unlike session storage, local storage data remains available until manually removed
//! Use localStorage.removeItem("key") to delete a specific item or localStorage.clear() to remove all data

//! Local Storage Service Wrapper
//! This object provides an easy-to-use interface for working with localStorage
//! It ensures that all stored values are automatically stringified before storage
//! and parsed back into JavaScript objects when retrieved
let localStorageService = {
  //! Stores a key-value pair in local storage
  //! Automatically converts non-string values (e.g., objects) into JSON strings
  setItem: function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  //! Retrieves a value from local storage by key
  //! Automatically parses JSON strings back into JavaScript objects
  //! If the key does not exist, it will return null
  getItem: function (key) {
    let item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
};

//! Storing a user object in local storage
localStorageService.setItem("currentUser", {
  firstName: "Milan",
  lastName: "Ognjanoski",
  age: 30,
  academy: "Web Development",
});

//! Retrieving the stored user object
let currentUser = localStorageService.getItem("currentUser");
console.log(currentUser);
//! Output: { firstName: "Milan", lastName: "Ognjanoski", age: 30, academy: "Web Development" }
