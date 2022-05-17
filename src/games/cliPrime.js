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
  const gameRule = '"yes" if given number is prime. Otherwise answer "no"';
  let number;
  let first;
  let ans;
  let result;
  const userName = (runGreetings());
  console.log(gameRule);
  for (let i = 0; i < 3; i += 1) {
    number = makeRandomNoZero(1000);
    first = number;
    ans = isPrime(number);
    result = startGame(first, ans, userName);
    if (result === 0) {
      break;
    }
    if (i === 2) {
      runVictory(userName);
    }
  }
};

export default runGamePrime;
