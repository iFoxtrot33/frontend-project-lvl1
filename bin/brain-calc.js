#!/usr/bin/env node
import {
  makeRandom,
} from '../helpers.js';

import startGame from '../src/game-engine.js';

const runCalcGame = () => {
  const firstNumber = makeRandom(100);
  const secondNumber = makeRandom(100);
  const thirdNumber = makeRandom(100);
  const fourthNumber = makeRandom(100);
  const fifthNumber = makeRandom(100);
  const sixthNumber = makeRandom(100);
  let sign = makeRandom(3);
  let first;
  let second;
  let third;
  let ans1;
  let ans2;
  let ans3;
  const gameRule = 'What is the result of the expression?';
  if (sign === 0) {
    first = `${firstNumber} + ${secondNumber}`;
    ans1 = (firstNumber + secondNumber).toString();
  } else if (sign === 1) {
    first = `${firstNumber} - ${secondNumber}`;
    ans1 = (firstNumber - secondNumber).toString();
  } else if (sign === 2) {
    first = `${firstNumber} * ${secondNumber}`;
    ans1 = (firstNumber * secondNumber).toString();
  }
  sign = makeRandom(3);
  if (sign === 0) {
    second = `${thirdNumber} + ${fourthNumber}`;
    ans2 = (thirdNumber + fourthNumber).toString();
  } else if (sign === 1) {
    second = `${thirdNumber} - ${fourthNumber}`;
    ans2 = (thirdNumber - fourthNumber).toString();
  } else if (sign === 2) {
    second = `${thirdNumber} * ${fourthNumber}`;
    ans2 = (thirdNumber * fourthNumber).toString();
  }
  sign = makeRandom(3);
  if (sign === 0) {
    third = `${fifthNumber} + ${sixthNumber}`;
    ans3 = (fifthNumber + sixthNumber).toString();
  } else if (sign === 1) {
    third = `${fifthNumber} - ${sixthNumber}`;
    ans3 = (fifthNumber - sixthNumber).toString();
  } else if (sign === 2) {
    third = `${fifthNumber} * ${sixthNumber}`;
    ans3 = (fifthNumber * sixthNumber).toString();
  }
  return startGame(first, second, third, ans1, ans2, ans3, gameRule);
};
console.log(runCalcGame());

export default runCalcGame;
