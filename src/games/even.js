import getRandomNumber from '../helpers.js';

import { startGame, numberOfRounds } from '../index.js';

const gameRounds = [];
const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;
const runBrainEven = () => {
  for (let i = 0; i < numberOfRounds; i += 1) {
    const number = getRandomNumber(1, 100);
    const gameRound = [number, isEven(number) ? 'yes' : 'no'];
    gameRounds.push(gameRound);
  }
  startGame(gameRounds, gameRule);
};

export default runBrainEven;
