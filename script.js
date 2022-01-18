'use strict';

const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const labelMessage = document.querySelector('.message');
const labelScore = document.querySelector('.score');
const labelHighscore = document.querySelector('.highscore');
const inputGuess = document.querySelector('.guess');

const body = document.querySelector('body');
const labelNumber = document.querySelector('.number');

let score = 20;
let highscore;
let randomNumber = Math.floor(Math.random() * 20) + 1;

labelNumber.textContent = randomNumber;

btnCheck.addEventListener('click', function () {
  if (Number(inputGuess.value) > randomNumber) {
    score--;
    labelMessage.textContent = 'Number too high!';
    if (score < 1) score = 0;
    labelScore.textContent = score;

  } else if (Number(inputGuess.value) < randomNumber) {
    score--;
    labelMessage.textContent = 'Number too low!';
    if (score < 1) score = 0;
    labelScore.textContent = score;
  } else {
    labelMessage.textContent = 'You won the game!';
  }
});
