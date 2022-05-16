#!/usr/bin/env node
import {
  makeRandomNoZero, findMax, calcDividers,
} from '../helpers.js';

import startGame from '../src/game-engine.js';

const runGameGcd = () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  let firstNumber = makeRandomNoZero(100);
  let secondNumber = makeRandomNoZero(100);
  let firstArr = [];
  let secondArr = [];
  let bothArr = [];
  firstArr = calcDividers(firstNumber);
  secondArr = calcDividers(secondNumber);
  for (let i = 0; i < firstArr.length; i += 1) {
    if (secondArr.includes(firstArr[i]) === true) {
      bothArr.push(firstArr[i]);
    }
  }
  const ans1 = (findMax(bothArr)).toString();
  const first = `${firstNumber} ${secondNumber}`;
  firstNumber = makeRandomNoZero(100);
  secondNumber = makeRandomNoZero(100);
  firstArr = [];
  secondArr = [];
  firstArr = calcDividers(firstNumber);
  secondArr = calcDividers(secondNumber);
  bothArr = [];
  for (let i = 0; i < firstArr.length; i += 1) {
    if (secondArr.includes(firstArr[i]) === true) {
      bothArr.push(firstArr[i]);
    }
  }
  const ans2 = (findMax(bothArr)).toString();
  const second = `${firstNumber} ${secondNumber}`;
  firstNumber = makeRandomNoZero(100);
  secondNumber = makeRandomNoZero(100);
  firstArr = [];
  secondArr = [];
  firstArr = calcDividers(firstNumber);
  secondArr = calcDividers(secondNumber);
  bothArr = [];
  for (let i = 0; i < firstArr.length; i += 1) {
    if (secondArr.includes(firstArr[i]) === true) {
      bothArr.push(firstArr[i]);
    }
  }
  const ans3 = (findMax(bothArr)).toString();
  const third = `${firstNumber} ${secondNumber}`;
  return startGame(first, second, third, ans1, ans2, ans3, gameRule);
};
console.log(runGameGcd());

export default runGameGcd;
