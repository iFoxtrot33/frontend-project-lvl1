#!/usr/bin/env node
import {
  makeRandomNoZero,
} from '../helpers.js';

import startGame from '../src/game-engine.js';

const isPrime = (num) => {
  const arr = [];
  for (let i = 0; i <= num; i += 1) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  if (arr.length === 2) {
    return 'yes';
  }
  return 'no';
};

const runGamePrime = () => {
  const gameRule = '"yes" if given number is prime. Otherwise answer "no"';
  let number = makeRandomNoZero(1000);
  const first = number;
  const ans1 = isPrime(number);
  number = makeRandomNoZero(1000);
  const second = number;
  const ans2 = isPrime(number);
  number = makeRandomNoZero(1000);
  const third = number;
  const ans3 = isPrime(number);
  return startGame(first, second, third, ans1, ans2, ans3, gameRule);
};
console.log(runGamePrime());

export default runGamePrime;
