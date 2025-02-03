let url = "https://restcountries.com/v2/alpha/mkd";

function getCountries(url) {
  return new Promise((resolve, reject) => {
    if (url) {
      resolve(url);
    } else {
      reject("An error occured");
    }
  });
}

// getCountries(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

async function getCountriesAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  let neighnours = [];
  for (let border of data.borders) {
    let borderFetch = border;
    let responseFetch = await fetch(
      `https://restcountries.com/v2/alpha/${borderFetch}`
    );
    let dataFetch = await responseFetch.json();
    neighnours.push(dataFetch);
  }
  console.log(neighnours);
}

getCountriesAsync(url);
