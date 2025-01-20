let swapi = "https://swapi.dev/api/people";
let btn = document.getElementById("get-sw-people");

btn.addEventListener("click", function () {
  getSwapiPeople(swapi);
});

document.getElementById("previous").addEventListener("click", function (event) {
  getSwapiPeople(event.target.value);
});

document.getElementById("next").addEventListener("click", function (event) {
  getSwapiPeople(event.target.value);
});

document.getElementById("content").addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    if (event.target.id === "previous") {
      getSwapiPeople(event.target.value);
    }
    if (event.target.id === "next") {
      getSwapiPeople(event.target.value);
    }
  }
});

function showSwapiPeople(people) {
  let content = document.getElementById("done_content");
  let html = "<ol>";
  for (person of people) {
    let li = `
        <li>
        ${person.name} has appeared in ${person.films.length} movies <button value="">More details</button>
        </li>
    `;
    html += li;
  }
  html += "</ol>";
  content.innerHTML = html;
}

function showMoreDetails(person) {}

function showNextPageBtn(data) {
  let next = document.getElementById("next");
  let previous = document.getElementById("previous");
  previous.style.display = "block";
  next.style.display = "block";
  if (data.previous) {
    previous.disabled = false;
    previous.value = data.previous;
  } else {
    previous.disabled = true;
  }

  if (data.next) {
    next.disabled = false;
    next.value = data.next;
  } else {
    next.disabled = true;
  }
}
function getSwapiPeople(url) {
  fetch(url)
    .then(function (response) {
      //   console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      showSwapiPeople(data.results);
      showNextPageBtn(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
