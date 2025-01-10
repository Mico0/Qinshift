let parts = [
  "base",
  "pole",
  "top-beam",
  "rope",
  "head",
  "body",
  "left-arm",
  "right-arm",
  "left-leg",
  "right-leg",
];
let hangmanStep = 0;
let guesses = 0;
let letters = document.querySelector(".buttons");
let hintBtn = document.querySelector("#hint");
let newGameBtn = document.querySelector("#newGame");
let category = document.getElementById("chosenCategory");
let wordDiv = document.querySelector(".word");
let lives = document.querySelector(".lives");
let message = document.getElementById("message");
let clueMessage = document.getElementById("clueMessage");
let clueHeading = document.getElementById("clue");
let jsonFile = `./files/words.json`;
let gameOver = false;

let slicedWord = [];
let correctGuesses = 0;
let numberOfHints = 3;
let tmp = [];

function drawHangman() {
  if (hangmanStep < parts.length) {
    document.querySelector(`.${parts[hangmanStep]}`).style.display = "block";
    hangmanStep++;
  }
}

function pickRandomWords(words) {
  let wordsLength = words.length;
  //   console.log(length);
  let randomIndex = Math.floor(Math.random() * wordsLength - 1);
  //   console.log(randomIndex);
  let randomWord = words[randomIndex];
  return randomWord;
}

function newGame(word) {
  slicedWord = word.word.split("");
  guesses = 10;
  hangmanStep = 0;
  correctGuesses = 0;
  gameOver = false;
  numberOfHints = 3;
  clueHeading.innerText = "";
  clueMessage.innerText = "";
  shownLetters = [];
  tmp = [...slicedWord];

  wordDiv.innerHTML = "";
  for (let part of parts) {
    // console.log(part);
    let currentPart = document.querySelector(`.${part}`);
    currentPart.style.display = "none";
  }
  category.innerText = `The Chosen Category is: ${word.wordCategory}`;
  lives.innerText = `You have ${guesses} guesses left`;
  for (let i = 0; i < word.word.length; i++) {
    wordDiv.innerHTML += `<p class="guessed_letter"> </p>`;
  }
  //   console.log("Sliced Word Array" + slicedWord);
}

letters.addEventListener("click", function (event) {
  //   console.log(event.target.innerText);
  var letter = event.target.innerText;
  if (gameOver) {
    return;
  }
  let isCorrect = false;
  for (let i = 0; i < slicedWord.length; i++) {
    if (letter === slicedWord[i]) {
      wordDiv.childNodes[i].innerText = letter.toUpperCase();
      correctGuesses++;
      isCorrect = true;
    }
  }
  if (!isCorrect) {
    guesses--;
    lives.innerText = `You have ${guesses} guesses left`;
    drawHangman();
  }

  if (guesses === 0) {
    gameOver = true;
    message.innerText = `Game over try again`;
    letters.removeEventListener("click", function () {});
  }
  if (correctGuesses === slicedWord.length) {
    gameOver = true;
    message.innerText = `Congratulations you guessed the word correctly`;
    hintBtn.removeEventListener("click", function () {});
  }
});

hintBtn.addEventListener("click", function () {
  if (numberOfHints > 0 && tmp.length > 0) {
    let randomLetterIndex = Math.floor(Math.random() * tmp.length);
    let hint = tmp[randomLetterIndex].toUpperCase();

    clueHeading.innerText = `${hint}`;
    numberOfHints--;
    tmp.splice(randomLetterIndex, 1);

    clueMessage.innerText = `You have ${numberOfHints} hints left.`;
    console.log(tmp);
  } else if (numberOfHints === 0) {
    clueMessage.innerText = `You have no hints left to show.`;
  } else {
    clueMessage.innerText = `All letters have been revealed.`;
  }
});

newGameBtn.addEventListener("click", function () {
  fetch(jsonFile)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      //   console.log(response);
      let words = mapWords(response);
      //   console.log(words);
      let randomWord = pickRandomWords(words);
      //   console.log(randomWord);
      newGame(randomWord);
    })
    .catch(function (error) {
      //   debugger;
      let errorP = document.createElement("p");
      document.querySelector(".gameButtons").append(errorP);
      errorP.style.color = "white";
      errorP.style.fontWeight = "600";
      errorP.style.margin = "0.5em";
      errorP.innerText = `${error}`;
    });
});

function Words(word, wordCategory, wordLength) {
  this.word = word;
  this.wordCategory = wordCategory;
  this.wordLength = wordLength;
}

function mapWords(data) {
  let words = [];
  for (let entry of data) {
    let wordObj = new Words(
      entry.word,
      entry["word-category"],
      entry["word-length"]
    );
    words.push(wordObj);
  }
  return words;
}
