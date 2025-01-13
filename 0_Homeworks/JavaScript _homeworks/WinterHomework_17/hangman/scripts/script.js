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

let slicedWord = [];
let guessedLetters = [];
let tmp = [];
let correctGuesses = [];

let hangmanStep = 0;
let guesses = 0;
let numberOfHints = 3;
let gameOver = false;

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

function drawHangman() {
  if (hangmanStep < parts.length) {
    document.querySelector(`.${parts[hangmanStep]}`).style.display = "block";
    hangmanStep++;
  }
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

function removeDuplicates(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let isUnique = true;
    for (let j = 0; j < newArray.length; j++) {
      if (array[i] === newArray[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function pickRandomWords(words) {
  let wordsLength = words.length;
  let randomIndex = Math.floor(Math.random() * wordsLength - 1);
  let randomWord = words[randomIndex];
  return randomWord;
}

function newGame(word) {
  slicedWord = word.word.split("");
  guesses = 10;
  hangmanStep = 0;
  gameOver = false;
  numberOfHints = 3;
  message.innerText = "";
  clueHeading.innerText = "";
  clueMessage.innerText = "";
  shownLetters = [];
  guessedLetters = [];
  correctGuesses = [];
  tmp = [...removeDuplicates(slicedWord)];

  category.innerHTML = `The Chosen Category is: <u> ${word.wordCategory} </u>`;
  lives.innerText = `You have ${guesses} guesses left`;
  wordDiv.innerHTML = "";

  for (let part of parts) {
    let currentPart = document.querySelector(`.${part}`);
    currentPart.style.display = "none";
  }

  for (let i = 0; i < word.word.length; i++) {
    wordDiv.innerHTML += `<p class="guessed_letter"> </p>`;
  }
}

letters.addEventListener("click", function (event) {
  let letter = event.target.innerText;

  if (gameOver) {
    return;
  }

  let isCorrect = false;

  if (guessedLetters.includes(letter)) {
    message.innerText = `You have already guessed that letter`;
    return;
  }

  guessedLetters.push(letter);

  for (let i = 0; i < slicedWord.length; i++) {
    if (letter === slicedWord[i]) {
      wordDiv.childNodes[i].innerText = letter.toUpperCase();
      correctGuesses.push(letter);
      isCorrect = true;
    }
  }
  if (!isCorrect) {
    guesses--;
    lives.innerText = `You have ${guesses} guesses left`;
    drawHangman();
  }

  if (guesses === 0) {
    message.innerText = `Game over try again`;
    gameOver = true;
  }

  if (correctGuesses.length === slicedWord.length) {
    message.innerText = `Congratulations you guessed the word correctly`;
    gameOver = true;
  }
});

hintBtn.addEventListener("click", function () {
  if (!gameOver) {
    if (numberOfHints > 0 && tmp.length > 0) {
      let randomLetterIndex = Math.floor(Math.random() * tmp.length);
      let hint = tmp[randomLetterIndex].toUpperCase();

      clueHeading.innerText = `Clue: ${hint}`;
      numberOfHints--;

      tmp.splice(randomLetterIndex, 1);
      clueMessage.innerText = `You have ${numberOfHints} hints left.`;
    } else if (numberOfHints === 0) {
      clueMessage.innerText = `You have no hints left to show.`;
    } else {
      clueMessage.innerText = `All letters have been revealed.`;
    }
  }
});

newGameBtn.addEventListener("click", function () {
  fetch(jsonFile)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let words = mapWords(response);
      let randomWord = pickRandomWords(words);
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
