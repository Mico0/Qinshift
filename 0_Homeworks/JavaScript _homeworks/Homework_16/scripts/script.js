$(document).ready(function () {
  //   console.log($);
  $("#print").click(function () {
    let name = $("#firstName").val();
    // console.log(name);
    $("#message").text(`Hello there, ${name}`);
  });

  $("#generate").click(function () {
    let color = $("#color").val();
    let text = $("#text").val();
    if (text !== "" && isValidColor(color)) {
      let header1 = document.createElement("h1");
      header1.style.color = color;
      header1.innerText = text;
      $("#res").append(header1);
    } else {
      let header3 = document.createElement("h3");
      header3.innerText = "You have entered invalid values";
      $("#res").append(header3);
    }
  });

  function isValidColor(color) {
    const option = new Option();
    option.style.color = color;
    return option.style.color !== "";
  }
});
