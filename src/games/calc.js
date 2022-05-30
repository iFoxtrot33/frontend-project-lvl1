import getRandomNumber from '../helpers.js';

import { startGame, numberOfRounds } from '../index.js';

const calculate = (sign, firstNumber, secondNumber) => {
  switch (sign) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`${sign} is wrong! Restart the game`);
  }
};

const runCalcGame = () => {
  const gamerule = 'What is the result of the expression?';
  const gameRounds = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNumber = getRandomNumber(0, 100);
    const secondNumber = getRandomNumber(0, 100);
    const operators = ['+', '-', '*'];
    const operatorIndex = getRandomNumber(0, operators.length - 1);
    const sign = operators[operatorIndex];
    const gameQuestion = `${firstNumber} ${sign} ${secondNumber}`;
    const rightAnswer = calculate(sign, firstNumber, secondNumber).toString();
    const gameRound = [gameQuestion, rightAnswer];
    gameRounds.push(gameRound);
  }
  startGame(gameRounds, gamerule);
};

export default runCalcGame;
