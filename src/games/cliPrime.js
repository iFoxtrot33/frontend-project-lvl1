import {
  getRandomNumber, calcDividers,
} from '../helpers.js';

import startGame from '../game-engine.js';

const isPrime = (num) => {
  const arr = calcDividers(num);
  return (arr.length === 2);
};

const runGamePrime = () => {
  const number = [];
  const expectedAnswer = [];
  let first;
  const gamerule = '"yes" if given number is prime. Otherwise answer "no"';
  for (let i = 0; i < 3; i += 1) {
    first = getRandomNumber(1, 1000);
    number.push(first);
    expectedAnswer.push(isPrime(first) ? 'yes' : 'no');
  }
  startGame(
    number[0],
    number[1],
    number[2],
    expectedAnswer[0],
    expectedAnswer[1],
    expectedAnswer[2],
    gamerule,
  );
};

export default runGamePrime;
