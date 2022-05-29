import getRandomNumber from '../helpers.js';

import { startGame, numberOfRounds } from '../index.js';

const getAnswer = (sign, firstNumber, secondNumber) => {
  let result;
  switch (sign) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      throw new Error('Wrong sign! Restart the game');
  }
  return result;
};

const runCalcGame = () => {
  const gamerule = 'What is the result of the expression?';
  const gameData = [];
  let gameRound = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNumber = getRandomNumber(0, 100);
    const secondNumber = getRandomNumber(0, 100);
    const operators = ['+', '-', '*'];
    const operator = getRandomNumber(0, 2);
    const sign = operators[operator];
    gameRound.push(`${firstNumber} ${sign} ${secondNumber}`);
    gameRound.push((getAnswer(sign, firstNumber, secondNumber)).toString());
    gameData.push(gameRound);
    gameRound = [];
  }
  startGame(gameData, gamerule);
};

export default runCalcGame;
