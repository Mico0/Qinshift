let apiURL = "https://swapi.py4e.com/api/planets/?page=1";
let btns = document.getElementsByTagName("button");

let apiCall = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      generateData(data);
      previousNext(data);
    })
    .catch((error) => console.log(error));
};

document.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    // console.log(event.target.id);
    if (event.target.id === "getData") {
      apiCall(apiURL);
    } else if (event.target.id === "next" || event.target.id === "prev") {
      apiCall(event.target.value);
    }
  }
});

let generateData = (data) => {
  document.getElementsByTagName("table")[0].style.display = "inline-block";
  let body = document.getElementsByTagName("tbody")[0];
  let html = "";
  //   console.log(data.results.length);
  for (let planet of data.results) {
    html += ` <tr>
    <td>${planet.name}</td>
    <td>${planet.population}</td>
    <td>${planet.climate}</td>
    <td>${planet.gravity}</td>
    </tr>   `;
  }
  body.innerHTML = html;
};

let previousNext = (data) => {
  let btnNext = document.getElementById("next");
  let btnPrev = document.getElementById("prev");
  btnNext.style.display = "inline-block";
  btnPrev.style.display = "inline-block";
  if (data.next) {
    btnNext.value = data.next;
    btnPrev.disabled = true;
  }
  if (data.previous) {
    btnPrev.disabled = false;
    btnPrev.value = data.previous;
  }
};
