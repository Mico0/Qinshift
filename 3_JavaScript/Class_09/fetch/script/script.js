document.getElementById("btn").addEventListener("click", function () {
  //! FETCH API
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      console.log("First .then before parsing");
      console.log(response);
      return response.json(); // we return the result and convert it to json
    })
    .then(function (result) {
      // receives the json response from the first .then function
      console.log("Second .then after parsing");
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    });
  //! FETCH API END
});
