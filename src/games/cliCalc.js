import {
  getRandomNumber,
} from '../helpers.js';

import startGame from '../game-engine.js';

const choseSign = (sign, one, two) => {
  const signValue = ['+', '-', '*'];
  return `${one} ${signValue[sign]} ${two}`;
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
  const gamerule = 'What is the result of the expression?';
  const number = [];
  const expectedAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(0, 100);
    const secondNumber = getRandomNumber(0, 100);
    const sign = getRandomNumber(0, 2);
    number.push(choseSign(sign, firstNumber, secondNumber));
    expectedAnswer.push((choseSign1(sign, firstNumber, secondNumber)).toString());
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

export default runCalcGame;
