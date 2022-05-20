import {
  getRandomNumber, findMax, calcDividers,
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
  const gamerule = 'Find the greatest common divisor of given numbers.';
  const number = [];
  const expectedAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    const firstArr = calcDividers(firstNumber);
    const secondArr = calcDividers(secondNumber);
    const bothArr = [];
    const dividers = findCommonDividers(firstArr, secondArr, bothArr);
    expectedAnswer.push((findMax(dividers)).toString());
    number.push(`${firstNumber} ${secondNumber}`);
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

export default runGameGcd;
