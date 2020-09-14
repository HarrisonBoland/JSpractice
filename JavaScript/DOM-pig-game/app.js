/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, roundScore, activePlayer, gamePlaying, prevDice, winningScore;

init();

document.querySelector('.btn-roll').addEventListener('click', () => {
  if (gamePlaying) {
    // 1. Random number
    let dice0 = Math.floor(Math.random() * 6) + 1;
    let dice1 = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    let diceDom0 = document.querySelector('.dice0');
    diceDom0.style.display = 'block';
    diceDom0.src = 'dice-' + dice0 + '.png';

    let diceDom1 = document.querySelector('.dice1');
    diceDom1.style.display = 'block';
    diceDom1.src = 'dice-' + dice1 + '.png';

    // 3. Update the round score if the rolled number was not a 1
    if (dice0 === 1) {
      // Next player
      nextPlayer();
    } else if (dice0 === 6 && dice1 === 6) {
      // Next player
      nextPlayer();
    } else {
      // Add score
      roundScore += dice0 + dice1;
      document.querySelector(
        '#current-' + activePlayer
      ).textContent = roundScore;
      // prevDice = dice0;
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', () => {
  if (gamePlaying) {
    // Store round score in scores
    scores[activePlayer] += roundScore;

    // Display the result
    document.getElementById('score-' + activePlayer).textContent =
      scores[activePlayer];

    // Check if Player won the game
    if (scores[activePlayer] >= winningScore) {
      document.getElementById('name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice0').style.display = 'none';
      document.querySelector('.dice1').style.display = 'none';
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.add('winner');
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.remove('active');
      gamePlaying = false;
    } else {
      // Change the player
      nextPlayer();
    }
  }
});

document.querySelector('.set-win').addEventListener('change', () => {
  winningScore = document.querySelector('.set-win').value
})

const nextPlayer = () => {
  roundScore = 0;
  // prevDice = 0;
  document.getElementById('current-' + activePlayer).textContent = '0';
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice0').style.display = 'none';
  document.querySelector('.dice1').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  // prevDice = 0;
  winningScore = 25;

  document.querySelector('.dice0').style.display = 'none';
  document.querySelector('.dice1').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}
