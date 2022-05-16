#!/usr/bin/env node
import {
  makeRandomNoZero, findMax, calcDividers,
} from '../helpers.js';

import startGame from '../src/game-engine.js';

const findCommonDividers = (arr1, arr2, bothArr) => {
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr2.includes(arr1[i]) === true) {
      bothArr.push(arr1[i]);
    }
  }
  return bothArr;
};

const runGameGcd = () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  let firstNumber = makeRandomNoZero(100);
  let secondNumber = makeRandomNoZero(100);
  let bothArr = [];
  let firstArr = calcDividers(firstNumber);
  let secondArr = calcDividers(secondNumber);
  let dividers = findCommonDividers(firstArr, secondArr, bothArr);
  const ans1 = (findMax(dividers)).toString();
  const first = `${firstNumber} ${secondNumber}`;
  firstNumber = makeRandomNoZero(100);
  secondNumber = makeRandomNoZero(100);
  firstArr = calcDividers(firstNumber);
  secondArr = calcDividers(secondNumber);
  bothArr = [];
  dividers = findCommonDividers(firstArr, secondArr, bothArr);
  const ans2 = (findMax(dividers)).toString();
  const second = `${firstNumber} ${secondNumber}`;
  firstNumber = makeRandomNoZero(100);
  secondNumber = makeRandomNoZero(100);
  firstArr = calcDividers(firstNumber);
  secondArr = calcDividers(secondNumber);
  bothArr = [];
  dividers = findCommonDividers(firstArr, secondArr, bothArr);
  const ans3 = (findMax(dividers)).toString();
  const third = `${firstNumber} ${secondNumber}`;
  return startGame(first, second, third, ans1, ans2, ans3, gameRule);
};
console.log(runGameGcd());

export default runGameGcd;
