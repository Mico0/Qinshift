let url = "https://restcountries.com/v3.1/alpha/";
const btn = document.getElementById("getData");
const input = document.getElementById("countryCode");

function getData() {
  let countryCode = input.value.toLowerCase();
  let borderingCountries = [];
  fetch(`${url}${countryCode}`)
    .then((response) => response.json())
    .then((data) => {
      for (let border of data[0].borders) {
        fetch(`${url}${border}`)
          .then((response) => response.json())
          .then((data) => borderingCountries.push(data));
      }
    })
    .catch((error) => console.log(error));
  console.log(borderingCountries);
}

async function getDataAsync() {
  let countryCode = input.value.toLowerCase();
  let borderingCountries = [];

  let response = await fetch(`${url}${countryCode}`);
  let data = await response.json();

  for (let border of data[0].borders) {
    let response = await fetch(`${url}${border}`);
    let data = await response.json();
    borderingCountries.push(data);
  }
  console.log(data);
  console.log(borderingCountries);
}

btn.addEventListener("click", getData);
btn.addEventListener("click", getDataAsync);

//TODO: Prasaj na cas za kako moze da se resi ova so koristenje na .MAP i promise.all pristap da se doobjasni
