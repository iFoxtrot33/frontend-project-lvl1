import {
  makeRandomNoZero, calcDividers, runGreetings, runVictory,
} from '../../helpers.js';

import startGame from '../game-engine.js';

const isPrime = (num) => {
  const arr = calcDividers(num);
  if (arr.length === 2) {
    return 'yes';
  }
  return 'no';
};

const runGamePrime = () => {
  const userName = (runGreetings());
  console.log('"yes" if given number is prime. Otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const number = makeRandomNoZero(1000);
    const first = number;
    const ans = isPrime(number);
    const result = startGame(first, ans, userName);
    if (result === 0) {
      break;
    }
    if (i === 2) {
      runVictory(userName);
    }
  }
};

export default runGamePrime;
