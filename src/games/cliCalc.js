import {
  getRandomNumber,
} from '../helpers.js';

import startGame from '../game-engine.js';

const choseSign = () => {
  const operators = ['+', '-', '*'];
  const i = getRandomNumber(0, 2);
  return operators[i];
};
const answer = (sign, one, two) => {
  let result;
  switch (sign) {
    case '+':
      result = one + two;
      break;
    case '-':
      result = one - two;
      break;
    default:
      result = one * two;
  }
  return result;
};

const runCalcGame = () => {
  const gamerule = 'What is the result of the expression?';
  const number = [];
  const expectedAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(0, 100);
    const secondNumber = getRandomNumber(0, 100);
    const sign = choseSign();
    number.push(`${firstNumber} ${sign} ${secondNumber}`);
    expectedAnswer.push((answer(sign, firstNumber, secondNumber)).toString());
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
