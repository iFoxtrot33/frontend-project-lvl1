import getRandomNumber from '../helpers.js';

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
  const gameData = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    gameData.push(`${firstNumber} ${secondNumber}`);
    gameData.push((calcMaxDivider(firstNumber, secondNumber)).toString());
  }
  startGame(gameData, gamerule);
};

export default runGameGcd;
