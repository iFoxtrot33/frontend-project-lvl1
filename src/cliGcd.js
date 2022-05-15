import {
  greetings, gameQuestion, answer, makeRandomNoZero, victory, findMax, calcDividers,
} from '../helpers.js';

import startRound from './game-engine.js';

const runGameGcd = () => {
  const name = (greetings());
  console.log('Find the greatest common divisor of given numbers.');
  let firstNumber = makeRandomNoZero(100);
  let secondNumber = makeRandomNoZero(100);
  let firstArr = [];
  let secondArr = [];
  let bothArr = [];
  let maxDivider;
  let clientAnswer;
  let temp;
  firstArr = calcDividers(firstNumber);
  secondArr = calcDividers(secondNumber);
  for (let i = 0; i < firstArr.length; i += 1) {
    if (secondArr.includes(firstArr[i]) === true) {
      bothArr.push(firstArr[i]);
    }
  }
  maxDivider = findMax(bothArr);
  console.log(gameQuestion(`${firstNumber} ${secondNumber}`));
  clientAnswer = answer();
  clientAnswer *= 1;
  temp = startRound(clientAnswer, name, maxDivider);
  if (temp.length === 8) {
    console.log(temp);
  } else {
    return temp;
  }
  // Commence of the second round
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
  maxDivider = findMax(bothArr);
  console.log(gameQuestion(`${firstNumber} ${secondNumber}`));
  clientAnswer = answer();
  clientAnswer *= 1;
  temp = startRound(clientAnswer, name, maxDivider);
  if (temp.length === 8) {
    console.log(temp);
  } else {
    return temp;
  }
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
  maxDivider = findMax(bothArr);
  console.log(gameQuestion(`${firstNumber} ${secondNumber}`));
  clientAnswer = answer();
  clientAnswer *= 1;
  temp = startRound(clientAnswer, name, maxDivider);
  if (temp.length === 8) {
    console.log(temp);
  } else {
    return temp;
  }
  return victory(name);
};

export default runGameGcd;
