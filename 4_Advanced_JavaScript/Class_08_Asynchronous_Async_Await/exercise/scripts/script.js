let url = "https://restcountries.com/v2/alpha/mkd";

async function getCountriesAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  let neighbours = [];
  for (let border of data.borders) {
    let borderFetch = border;
    let responseFetch = await fetch(
      `https://restcountries.com/v2/alpha/${borderFetch}`
    );
    let dataFetch = await responseFetch.json();
    neighbours[dataFetch.name] = dataFetch;
  }
  console.log(neighbours);
}

getCountriesAsync(url);
