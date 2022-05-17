import {
  makeRandomNoZero, findMax, calcDividers, runVictory, runGreetings,
} from '../../helpers.js';

import startGame from '../game-engine.js';

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
  let firstNumber;
  let secondNumber;
  let bothArr;
  let dividers;
  let firstArr;
  let secondArr;
  let first;
  let ans;
  let result;
  const userName = (runGreetings());
  console.log(gameRule);
  for (let i = 0; i < 3; i += 1) {
    firstNumber = makeRandomNoZero(100);
    secondNumber = makeRandomNoZero(100);
    firstArr = calcDividers(firstNumber);
    secondArr = calcDividers(secondNumber);
    bothArr = [];
    dividers = findCommonDividers(firstArr, secondArr, bothArr);
    ans = (findMax(dividers)).toString();
    first = `${firstNumber} ${secondNumber}`;
    result = startGame(first, ans, userName);
    if (result === 0) {
      break;
    }
    if (i === 2) {
      runVictory(userName);
    }
  }
};

export default runGameGcd;
