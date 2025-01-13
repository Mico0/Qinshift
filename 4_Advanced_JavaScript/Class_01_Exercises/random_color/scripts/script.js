document.addEventListener("DOMContentLoaded", function () {
  let random1 = Math.floor(Math.random() * 255 + 1);
  let random2 = Math.floor(Math.random() * 255 + 1);
  let random3 = Math.floor(Math.random() * 255 + 1);
  let rgbString = `rgb(${random1},${random2},${random3})`;
  let body = document.getElementsByTagName("body");
  let hexHead = document.getElementById("hex");
  body[0].style.backgroundColor = `${rgbString}`;
  hexHead.innerText = rgbString;
});
