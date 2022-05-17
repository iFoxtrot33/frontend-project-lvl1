import {
  makeRandom,
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
  const firstNumber = makeRandom(100);
  const secondNumber = makeRandom(100);
  const thirdNumber = makeRandom(100);
  const fourthNumber = makeRandom(100);
  const fifthNumber = makeRandom(100);
  const sixthNumber = makeRandom(100);
  let sign = makeRandom(3);
  const gameRule = 'What is the result of the expression?';
  const first = choseSign(sign, firstNumber, secondNumber);
  const ans1 = (choseSign1(sign, firstNumber, secondNumber)).toString();
  sign = makeRandom(3);
  const second = choseSign(sign, thirdNumber, fourthNumber);
  const ans2 = (choseSign1(sign, thirdNumber, fourthNumber)).toString();
  sign = makeRandom(3);
  const third = choseSign(sign, fifthNumber, sixthNumber);
  const ans3 = (choseSign1(sign, fifthNumber, sixthNumber)).toString();
  return startGame(first, second, third, ans1, ans2, ans3, gameRule);
};

export default runCalcGame;
