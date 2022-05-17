import {
  makeRandom, runVictory, runGreetings,
} from '../../helpers.js';

import startGame from '../game-engine.js';

const choseSign = (sign, one, two) => {
  if (sign === 0) {
    return `${one} + ${two}`;
  } if (sign === 1) {
    return `${one} - ${two}`;
  }
  return `${one} * ${two}`;
};
const choseSign1 = (sign, one, two) => {
  if (sign === 0) {
    return one + two;
  } if (sign === 1) {
    return one - two;
  }
  return one * two;
};

const runCalcGame = () => {
  let result;
  let ans;
  let first;
  let sign;
  let firstNumber;
  let secondNumber;
  const gameRule = 'What is the result of the expression?';
  const userName = (runGreetings());
  console.log(gameRule);
  for (let i = 0; i < 3; i += 1) {
    firstNumber = makeRandom(100);
    secondNumber = makeRandom(100);
    sign = makeRandom(3);
    first = choseSign(sign, firstNumber, secondNumber);
    ans = (choseSign1(sign, firstNumber, secondNumber)).toString();
    result = startGame(first, ans, userName);
    if (result === 0) {
      break;
    }
    if (i === 2) {
      runVictory(userName);
    }
  }
};

export default runCalcGame;
