import getRandomNumber from '../helpers.js';

import startGame from '../index.js';

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
  const gamerule = 'Find the greatest common divisor of given numbers.';
  const gameData = [];
  let gameRound = [];
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    gameRound.push(`${firstNumber} ${secondNumber}`);
    gameRound.push((calculateGCD(firstNumber, secondNumber)).toString());
    gameData.push(gameRound);
    gameRound = [];
  }
  startGame(gameData, gamerule);
};

export default runGameGcd;
