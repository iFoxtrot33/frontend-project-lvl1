import getRandomNumber from '../helpers.js';

import startGame from '../index.js';

const getAnswer = (sign, one, two) => {
  let result;
  switch (sign) {
    case '+':
      result = one + two;
      break;
    case '-':
      result = one - two;
      break;
    case '*':
      result = one * two;
      break;
    default:
      throw new Error('Wrong sign! Restart the game');
  }
  return result;
};

const runCalcGame = () => {
  const gamerule = 'What is the result of the expression?';
  const gameData = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(0, 100);
    const secondNumber = getRandomNumber(0, 100);
    const operators = ['+', '-', '*'];
    const operator = getRandomNumber(0, 2);
    const sign = operators[operator];
    gameData.push(`${firstNumber} ${sign} ${secondNumber}`);
    gameData.push((getAnswer(sign, firstNumber, secondNumber)).toString());
  }
  startGame(gameData, gamerule);
};

export default runCalcGame;
