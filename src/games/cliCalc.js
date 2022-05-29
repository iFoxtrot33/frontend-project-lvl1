import getRandomNumber from '../helpers.js';

import { startGame, numberOfRounds } from '../index.js';

const getAnswer = (sign, firstNumber, secondNumber) => {
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
  const gameData = [];
  let gameRound = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNumber = getRandomNumber(0, 100);
    const secondNumber = getRandomNumber(0, 100);
    const operators = ['+', '-', '*'];
    const operatorIndex = getRandomNumber(0, operators.length - 1);
    const sign = operators[operatorIndex];
    gameRound = [`${firstNumber} ${sign} ${secondNumber}`, getAnswer(sign, firstNumber, secondNumber).toString()];
    gameData.push(gameRound);
  }
  startGame(gameData, gamerule);
};

export default runCalcGame;
