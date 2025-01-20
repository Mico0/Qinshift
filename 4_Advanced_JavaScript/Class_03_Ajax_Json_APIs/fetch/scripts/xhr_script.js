document.getElementById("fetch").addEventListener("click", function () {
  // debugger;
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    console.log("Request sent");
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Request is successfull");
      let response = xhr.response;
      // console.log(response);
      //! we always receive the response as a string, then we parse it
      let responseObj = JSON.parse(response);
      console.log(responseObj);
    } else {
      console.log(xhr.responseText);
    }

    // if (xhr.status === 500) {
    //   console.log("Server error");
    // }
  };
  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json"
  );
  xhr.send();
});
