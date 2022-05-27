import getRandomNumber from '../helpers.js';

import startGame from '../index.js';

const isEven = (num) => num % 2 === 0;
const gameData = [];
let gameRound = [];
const runBrainEven = () => {
  const gamerule = 'Answer "yes" if the number is even, otherwise answer "no".';
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(1, 100);
    gameRound.push(number);
    gameRound.push(isEven(number) ? 'yes' : 'no');
    gameData.push(gameRound);
    gameRound = [];
  }
  startGame(gameData, gamerule);
};

export default runBrainEven;
