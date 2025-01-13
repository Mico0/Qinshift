let btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", function () {
  let color = document.getElementById("color");
  let fontSize = document.getElementById("fontSize");
  let text = document.getElementById("theText");

  let header = document.createElement("h1");
  header.style.color = color.value;
  header.style.fontSize = `${fontSize.value}px`;
  header.innerText = text.value;

  document.getElementsByTagName("body")[0].append(header);
});
