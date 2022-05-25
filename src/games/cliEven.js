import getRandomNumber from '../helpers.js';

import startGame from '../index.js';

const isEven = (num) => num % 2 === 0;
const gameData = [];
const runBrainEven = () => {
  const gamerule = 'Answer "yes" if the number is even, otherwise answer "no".';
  for (let i = 0; i < 3; i += 1) {
    const first = getRandomNumber(1, 100);
    gameData.push(first);
    gameData.push(isEven(first) ? 'yes' : 'no');
  }
  startGame(gameData, gamerule);
};

export default runBrainEven;
