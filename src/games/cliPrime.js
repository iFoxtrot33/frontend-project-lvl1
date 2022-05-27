import getRandomNumber from '../helpers.js';

import startGame from '../index.js';

const calcDividers = (num) => {
  const arr = [];
  for (let k = 0; k <= num; k += 1) {
    if ((num % k) === 0) {
      arr.push(k);
    }
  }
  return arr;
};

const isPrime = (num) => {
  const arr = calcDividers(num);
  return (arr.length === 2);
};

const runGamePrime = () => {
  const gameData = [];
  let gameRound = [];
  let first;
  const gamerule = '"yes" if given number is prime. Otherwise answer "no"';
  for (let i = 0; i < 3; i += 1) {
    first = getRandomNumber(1, 1000);
    gameRound.push(first);
    gameRound.push(isPrime(first) ? 'yes' : 'no');
    gameData.push(gameRound);
    gameRound = [];
  }
  startGame(gameData, gamerule);
};

export default runGamePrime;
