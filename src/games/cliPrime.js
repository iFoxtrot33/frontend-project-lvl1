import getRandomNumber from '../helpers.js';

import startGame from '../index.js';

const isPrime = (num) => {
  const requiredDividers = 2;
  const numberOfDividers = [];
  for (let divider = 0; divider <= num; divider += 1) {
    if ((num % divider) === 0) {
      numberOfDividers.push(divider);
    }
  }
  return (numberOfDividers.length === requiredDividers);
};

const runGamePrime = () => {
  const gameData = [];
  let gameRound = [];
  let number;
  const gamerule = '"yes" if given number is prime. Otherwise answer "no"';
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    number = getRandomNumber(1, 1000);
    gameRound.push(number);
    gameRound.push(isPrime(number) ? 'yes' : 'no');
    gameData.push(gameRound);
    gameRound = [];
  }
  startGame(gameData, gamerule);
};

export default runGamePrime;
