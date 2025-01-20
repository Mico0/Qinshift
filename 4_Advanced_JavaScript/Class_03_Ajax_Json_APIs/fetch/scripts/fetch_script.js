document.getElementById("fetch").addEventListener("click", function () {
  fetch(
    "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json"
  )
    .then(function (response) {
      return response.json(); //! First step of the .then function we have a response
    })
    .then(function (data) {
      console.log(data); //! Second step of the .then function we have data since we parsed the response
    })
    .catch(function (error) {
      console.log(error); //!  accept and return error as argument
    });
});
