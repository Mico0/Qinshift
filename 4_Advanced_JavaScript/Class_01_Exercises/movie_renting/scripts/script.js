let movieArray = [
  "Lord of The Rings",
  "Harry Potter",
  "Van Helsing",
  "Blade",
  "Underworld",
  "Conjuring",
  "A Bronx Tale",
];

function searchMovies() {
  let movieInput = document.getElementById("search").value;
  let header = document.getElementById("header");
  let lowerCaseInput = movieInput.toLowerCase();
  if (movieInput.toLowerCase() === "") {
    header.innerText = `Enter a movie name`;
    return;
  }
  for (let movie of movieArray) {
    let lowerCase = movie.toLowerCase();
    debugger;
    if (lowerCase === lowerCaseInput) {
      header.innerText = `The movie can be rented`;
      header.style.color = "green";
      return;
    } else {
      header.innerText = `The movie cannot be rented`;
      header.style.color = "red";
      return;
    }
  }
}

document.getElementById("btn").addEventListener("click", searchMovies);
