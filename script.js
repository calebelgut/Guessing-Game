'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // WHEN A PLAYER GIVES NO INPUT:
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number! 😜';
    displayMessage('No Number! 😜');

    // WHEN A PLAYER WINS:
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number! 🏆🏆🏆';
    displayMessage('Correct Number! 🏆🏆🏆');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highScore').textContent = highScore;

    // WHEN A GUESS IS WRONG:
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(
        guess > secretNumber ? 'Too High, My Guy! 🤣' : 'Too Low, My Bro! 😁'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You Lost! 🤡';
      displayMessage('You Lost! 🤡');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
