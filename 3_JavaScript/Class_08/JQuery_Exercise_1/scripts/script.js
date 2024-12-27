$(document).ready(function (e) {
  console.log(e);
  let div = $("#firstWrapper");
  console.log(div);
  let paragraph = $("p").last();
  console.log(paragraph);
  let h1 = $("#secondWrapper").find("h1");
  console.log(h1);
  let h3 = $("h3")[1];
  console.log(h3);
  let button = $("button").first();
  console.log(button);

  let firstH1 = $("h1").first().text("JQuery is awesome!");

  firstH1.after("<p>This is an added paragraph </p>");

  button.css("background-color", "red");

  button.click(function () {
    $("p").css("color", "green");
    $("#secondWrapper").hide();
    button.text("Don't click me!");
    button.css("background-color", "green");
    button.css("font-size", "24px");
    button.css("font-weight", "600");
  });

  $("#calculate").click(function () {
    let val1 = $("#input1").val();
    let val2 = $("#input2").val();
    let val3 = $("#input3").val();
    console.log(val1);
    let res = 0;
    let avg = 0;
    res = parseInt(val1) + parseInt(val2) + parseInt(val3);
    avg = res / 3;
    console.log(res);
    console.log(avg);
    if (res >= 10) {
      $("#result").css("color", "green");
      $("#result").html(res);
    } else {
      $("#result").css("color", "red");
      $("#result").html(res);
    }
  });
});
