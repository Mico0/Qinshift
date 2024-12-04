// let input = prompt(
//   "Please enter the year for which you want to calculate the Chinese Zodiac Sign: "
// );

// let inputValue = parseInt(input);

// let result = document.getElementById("result");

// let zodiacMod = 0;

// if (isNaN(inputValue) || inputValue <= 0) {
//   location.reload();
// } else {
//   zodiacMod = (inputValue - 4) % 12;
// }

function calculateZodiac() {
  let year = parseInt(
    prompt(
      "Please enter the year for which you want to calculate the Chinese Zodiac Sign"
    )
  );

  if (isNaN(year) || year === 0) {
    alert("Please enter a valid year");
    calculateZodiac();
  }
  let zodiacMod = (year - 4) % 12;
  if (zodiacMod === 0) {
    result.innerHTML = "0 - Rat";
  } else if (zodiacMod === 1) {
    result.innerHTML = "1 - Ox";
  } else if (zodiacMod === 2) {
    result.innerHTML = "2 - Tiger";
  } else if (zodiacMod === 3) {
    result.innerHTML = "3 - Rabbit";
  } else if (zodiacMod === 4) {
    result.innerHTML = "4 - Dragon";
  } else if (zodiacMod === 5) {
    result.innerHTML = "5 - Snake";
  } else if (zodiacMod === 6) {
    result.innerHTML = "6 - Horse";
  } else if (zodiacMod === 7) {
    result.innerHTML = "7 - Goat";
  } else if (zodiacMod === 8) {
    result.innerHTML = "8 - Monkey";
  } else if (zodiacMod === 9) {
    result.innerHTML = "9 - Rooster";
  } else if (zodiacMod === 10) {
    result.innerHTML = "10 - Dog";
  } else if (zodiacMod === 11) {
    result.innerHTML = "11 - Pig";
  }
}

calculateZodiac();
