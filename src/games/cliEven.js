import getRandomNumber from '../helpers.js';

import { startGame, numberOfRounds } from '../index.js';

const isEven = (num) => num % 2 === 0;
const gameData = [];
let gameRound = [];
const gamerule = 'Answer "yes" if the number is even, otherwise answer "no".';
const runBrainEven = () => {
  for (let i = 0; i < numberOfRounds; i += 1) {
    const number = getRandomNumber(1, 100);
    gameRound = [number, isEven(number) ? 'yes' : 'no'];
    gameData.push(gameRound);
  }
  startGame(gameData, gamerule);
};

export default runBrainEven;
