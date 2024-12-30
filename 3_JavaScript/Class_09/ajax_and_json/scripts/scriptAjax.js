$(document).ready(function () {
  console.log($);
  //   let url = "https://jsonplaceholder.typicode.com/posts";

  // this is only the event handler
  $("#data").on("click", function () {
    //! AJAX
    $.ajax({
      //* AJAX function receives an object as a parameter
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET", //* default method is always GET
      success: function (result) {
        console.log(result);
      }, //* success function that receives the result, called when the ajax call is successsfull
      error: function (error) {
        console.log(error);
      }, //* error functin that receives the error if the function fails / the ajax call has failed
    });

    //! AJAX END
  });
});

$("#swapi").click(function () {
  $.ajax({
    url: "https://www.swapi.tech/api/people/1",
    method: "GET",
    success: function (result) {
      console.log(
        result.result.properties.name,
        result.result.properties.height,
        result.result.properties.mass
      );
    },
    error: function (error) {
      console.log(error);
    },
  });
});
