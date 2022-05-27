import getRandomNumber from '../helpers.js';

import startGame from '../index.js';

const isPrime = (num) => {
  const requiredDividers = 2;
  const arr = [];
  for (let k = 0; k <= num; k += 1) {
    if ((num % k) === 0) {
      arr.push(k);
    }
  }
  return (arr.length === requiredDividers);
};

const runGamePrime = () => {
  const gameData = [];
  let gameRound = [];
  let number;
  const gamerule = '"yes" if given number is prime. Otherwise answer "no"';
  for (let i = 0; i < 3; i += 1) {
    number = getRandomNumber(1, 1000);
    gameRound.push(number);
    gameRound.push(isPrime(number) ? 'yes' : 'no');
    gameData.push(gameRound);
    gameRound = [];
  }
  startGame(gameData, gamerule);
};

export default runGamePrime;
