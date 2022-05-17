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
  const userName = (runGreetings());
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = makeRandomNoZero(100);
    const secondNumber = makeRandomNoZero(100);
    const firstArr = calcDividers(firstNumber);
    const secondArr = calcDividers(secondNumber);
    const bothArr = [];
    const dividers = findCommonDividers(firstArr, secondArr, bothArr);
    const ans = (findMax(dividers)).toString();
    const first = `${firstNumber} ${secondNumber}`;
    const result = startGame(first, ans, userName);
    if (result === 0) {
      break;
    }
    if (i === 2) {
      runVictory(userName);
    }
  }
};

export default runGameGcd;
