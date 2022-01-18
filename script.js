'use strict';

const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const labelMessage = document.querySelector('.message');
const labelScore = document.querySelector('.score');
const labelHighscore = document.querySelector('.highscore');
const inputGuess = document.querySelector('.guess');

const body = document.querySelector('body');
const labelNumber = document.querySelector('.number');

const showMessage = message =>  labelMessage.textContent = message;
const showScore = score => labelScore.textContent = score;
const secretNumber = e => Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
let playing = true;
let randomNumber = secretNumber();

labelNumber.textContent = randomNumber;

btnCheck.addEventListener('click', function () {
  if (playing) {
    if (Number(inputGuess.value) > randomNumber) {
      score--;
      showMessage('Number too high!')
      if (score < 1) score = 0;
      showScore(score);

    } else if (Number(inputGuess.value) < randomNumber) {
      score--;
      showMessage('Number too low!')
      if (score < 1) score = 0;
      showScore(score);

    } else {
      showMessage('You won the game!')
      if (score > highscore) labelHighscore.textContent = highscore = score;
      inputGuess.value = '';
      document.querySelector('body').style.backgroundColor = '#60b347';
      labelNumber.style.width = '30rem';
      playing = false;
    }
  }
});


btnAgain.addEventListener('click', function() {
  highscore === 20 ? labelHighscore.textContent = highscore = 0 : labelHighscore.textContent = highscore;
  showMessage('Start guessing!')
  document.querySelector('body').style.backgroundColor = '#222';
  labelNumber.style.width = '15rem';
  playing = true;
  labelNumber.textContent = randomNumber = secretNumber();
  score = 20;
  showScore(score);
});