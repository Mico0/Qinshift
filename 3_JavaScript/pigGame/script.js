// GLOBAL VARIABLES

const winningScore = 100;
let playerOneScore = 0; // player one total score
let playerTwoScore = 0; // player two total score
let roundScore = 0; // round score

let isGameActive = false;

let activePlayer = 0; // 0 is playerOne, 1 is playerTwo

// ELEMENTS

let playerOneTotalScoreElement = document.getElementById("score-0");
let playerTwoTotalScoreElement = document.getElementById("score-1");
let playerOneCurrentScoreElement = document.getElementById("current-0");
let playerTwoCurrentScoreElement = document.getElementById("current-1");

// BUTTONS

let newGameButton = document.querySelector(".btn-new");
let rollButton = document.querySelector(".btn-roll");
let holdButton = document.querySelector(".btn-hold");

function newGame() {
  playerOneScore = 0;
  playerTwoScore = 0;
  roundScore = 0;
  activePlayer = 0;
  isGameActive = true;
  playerOneTotalScoreElement.innerText = 0;
  playerTwoTotalScoreElement.innerText = 0;
  playerOneCurrentScoreElement.innerText = 0;
  playerTwoCurrentScoreElement.innerText = 0;
}

newGameButton.addEventListener("click", newGame);

function rollDice() {
  if (!isGameActive) {
    return;
  }
  let diceOne = Math.floor(Math.random() * 6 + 1);
  let diceTwo = Math.floor(Math.random() * 6 + 1);
  document.querySelector(".dice").src = `./dice/dice-${diceOne}.png`;
  document.querySelector(".dice2").src = `./dice/dice-${diceTwo}.png`;
  //   console.log("Dice one: ", diceOne + "Dice Two:", diceTwo);
  if (diceOne !== 1 && diceTwo !== 1) {
    roundScore += diceOne + diceTwo;
    if (activePlayer === 0) {
      playerOneCurrentScoreElement.innerText = roundScore;
    } else {
      playerTwoCurrentScoreElement.innerText = roundScore;
    }
  } else {
    nextPlayer();
  }
}

rollButton.addEventListener("click", rollDice);

function holdScore() {
  if (!isGameActive) {
    return;
  }
  if (activePlayer === 0) {
    playerOneScore += roundScore;
    playerOneTotalScoreElement.innerText = playerOneScore;
    nextPlayer();
  } else {
    playerTwoScore += roundScore;
    playerTwoTotalScoreElement.innerText = playerTwoScore;
    nextPlayer();
  }
  checkWinner();
}

holdButton.addEventListener("click", holdScore);

function nextPlayer() {
  // round score set to 0
  roundScore = 0;
  // this works with string concatenation

  // change round score in html
  if (activePlayer === 0) {
    playerOneCurrentScoreElement.innerText = 0;
  } else {
    playerTwoCurrentScoreElement.innerText = 0;
  }

  // change active player HTML - remove active class
  document
    .querySelector(`.player-${activePlayer}-panel`)
    .classList.remove("active");
  //   activePlayer = activePlayer === 0 ? 1 : 0; //* TERNARY OPERATOR
  // change active player
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  // add acctive class to the other player
  document
    .querySelector(`.player-${activePlayer}-panel`)
    .classList.add("active");
}

function checkWinner() {
  if (playerOneScore >= winningScore) {
    alert("Player 1 wins the game");
    isGameActive = false;
  } else if (playerTwoScore >= winningScore) {
    alert("Player 2 is the winner");
    isGameActive = false;
  }
}
