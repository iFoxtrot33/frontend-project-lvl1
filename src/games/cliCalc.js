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
  const userName = (runGreetings());
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = makeRandom(100);
    const secondNumber = makeRandom(100);
    const sign = makeRandom(3);
    const first = choseSign(sign, firstNumber, secondNumber);
    const ans = (choseSign1(sign, firstNumber, secondNumber)).toString();
    const result = startGame(first, ans, userName);
    if (result === 0) {
      break;
    }
    if (i === 2) {
      runVictory(userName);
    }
  }
};

export default runCalcGame;
