let url = "https://restcountries.com/v2/alpha/mkd";

async function getCountriesAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  let neighbours = [];
  for (let border of data.borders) {
    let borderFetch = border;
    let responseFetch = await fetch(
      `https://restcountries.com/v2/alpha/${borderFetch}`
    );
    let dataFetch = await responseFetch.json();
    neighbours[dataFetch.name] = dataFetch;
  }

  console.log(`Neighbours:`);
  console.log(neighbours);
}

getCountriesAsync(url);

//TODO: Ask why this does not work

/*
  console.log(`Country: ${data.name} \n`);
  console.log(data + "\n");


  console.log(`Country: ${data.name} \n ${data}`);

*/
