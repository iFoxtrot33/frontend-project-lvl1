import {
  getRandomNumber,
} from '../helpers.js';

import startGame from '../index.js';

const calcMaxDivider = (num1, num2) => {
  let a = num1;
  let b = num2;
  while ((a !== 0) && (b !== 0)) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const runGameGcd = () => {
  const gamerule = 'Find the greatest common divisor of given numbers.';
  const number = [];
  const expectedAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    expectedAnswer.push((calcMaxDivider(firstNumber, secondNumber)).toString());
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
