let swapi = "https://swapi.dev/api/people";
let btn = document.getElementById("get-sw-people");

let personCache = {};

btn.addEventListener("click", function () {
  getSwapiPeople(swapi);
});

document.getElementById("content").addEventListener(
  "click",
  function (event) {
    event.stopPropagation();
    if (event.target.tagName === "BUTTON") {
      if (event.target.id === "previous") {
        getSwapiPeople(event.target.value);
      }
      if (event.target.id === "next") {
        getSwapiPeople(event.target.value);
      }
      if (event.target.innerText === "More details") {
        showMoreDetails(event.target.value);
      }
    }
  }
  // false
);

function showSwapiPeople(people) {
  let content = document.getElementById("done_content");
  let html = "<ol>";
  for (let person of people) {
    personCache[person.url] = person;
    let li = `
        <li>
        ${person.name} has appeared in ${person.films.length} movies <button value="${person.url}">More details</button>
        </li>
    `;
    html += li;
  }
  html += "</ol>";
  content.innerHTML = html;
  console.log(personCache);
}

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
      // debugger;
      console.log(data);
      showSwapiPeople(data.results);
      showNextPageBtn(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showMoreDetails(url) {
  let details = document.getElementById("details");
  let person = personCache[url];
  console.log(person);
  if (person) {
    details.innerHTML = `Showing details for <b>${person.name}</b> who is born in ${person.birth_year} and is ${person.height}cm high and weighs ${person.mass}kgs, ${person.name} stars in ${person.films.length} movies`;
  } else {
    details.innerHTML = `No details available.`;
  }
}
