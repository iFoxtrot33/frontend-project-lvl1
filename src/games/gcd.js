import getRandomNumber from '../helpers.js';

import { startGame, numberOfRounds } from '../index.js';

const calculateGCD = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
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
  const gameRounds = [];
  const gameRule = 'Find the greatest common divisor of given numbers.';
  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    const gameQuestion = `${firstNumber} ${secondNumber}`;
    const rightAnswer = calculateGCD(firstNumber, secondNumber).toString();
    const gameRound = [gameQuestion, rightAnswer];
    gameRounds.push(gameRound);
  }
  startGame(gameRounds, gameRule);
};

export default runGameGcd;
