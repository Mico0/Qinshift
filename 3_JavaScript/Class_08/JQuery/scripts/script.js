$(document).ready(function () {
  // console.log("I am ready!");
  let el = document.getElementById("someID"); // vanilla JS way of getting element
  let elem = $("#mainTitle"); // JQuery way of getting HTML element by ID
  console.log(elem);

  let allElements = $("*");
  console.log(allElements);

  let elementByClassName = $(".wrapper");
  console.log(elementByClassName);

  let elementByTagName = $("p");
  console.log(elementByTagName);

  let elementsByMultipleSelectors = $(".innerWrapper, .wrapper, #mainTitle");
  console.log(elementsByMultipleSelectors);

  let firstParagraph = $("p:first"); //returns the first paragraph found
  let lastParagraph = $("p:last");
  console.log(firstParagraph);

  let firstChildren = $("h3:first-child");
  console.log(firstChildren);

  let nthChild = $("p:nth-child(2)");
  console.log(nthChild);

  let attSearch = $("[name=test]"); // search elements that have a specific attribute with a specific value
  console.log(attSearch);

  let allParagraphs = $("p");
  let first = allParagraphs.first();
  console.log(first);

  let pClass = $("*").find(".pClass"); // searched for the descendand element with class pClass of all all (*) elements
  console.log(pClass);

  let allElem = $("*");
  let fifthElement = allElem.get(5); // takes the 5th element of all elements
  console.log(allElem);
  console.log(fifthElement);

  let secondTitle = $("#SecondTitle");
  let nextElement = secondTitle.next(); // takes the next sibling
  console.log(nextElement);

  // let value = $('input[value="Cool"').val(); - Not a good way of selencting the element, the value attribute might change
  let value = $("input").first().val();
  console.log(value);

  // $("#mainTitle").hide(); == display:none;
  // $('#mainTitle').show(); == display: block;

  console.log($(".wrapper").html()); // returns the HTML of an element
  $("#SecondTitle").html("This is a changed heading!!!!"); // changes the HTML of an element to the given argument

  console.log($("#mainTitle").css("color")); // returns the css for the property given as an argument
  $("#mainTitle").css("color", "rgb(172, 6, 6)"); // updates the css of the first argument color to the second rgb() argument given

  $(".innerWrapper").find("p:first").after("<h2>Added HEADERINO</h2>");
  $(".innerWrapper").find("p.pClass").before("<h2>Added HEADERINO BEFORE</h2>");

  let button = $("button").first();

  button.on("click", function (e) {
    console.log(e);
    console.log("Hello from the first click handler");
  });

  let input = $("input").first();
  input.on("keypress", function (e) {
    console.log(e.target.value);
  });

  let buttonLast = $("button").last();
  buttonLast.click(function () {
    console.log("second button click");
  });

  input.change(function (e) {
    console.log(e.target);
  });
  //! Attaches change event listener
  //! Replaces input.addEventListener(function(){});
});
