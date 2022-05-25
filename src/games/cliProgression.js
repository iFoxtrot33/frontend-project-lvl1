import getRandomNumber from '../helpers.js';

import startGame from '../index.js';

const makeProgression = (value, length, first) => {
  const result = [];
  let one = first;
  for (let i = 0; i < length; i += 1) {
    result.push(one);
    one += value;
  }
  return result;
};

const runGameProgression = () => {
  const gamerule = 'What number is missing in the progression?';
  const gameData = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const step = getRandomNumber(1, 10);
    const randomLength = getRandomNumber(6, 10);
    const progression = makeProgression(step, randomLength, firstNumber);
    const hiddenAnswer = randomLength - getRandomNumber(1, 5);
    const temp = ((progression[hiddenAnswer]).toString());
    progression[hiddenAnswer] = '..';
    gameData.push(`${progression.join(' ')}`);
    gameData.push(temp);
  }
  startGame(gameData, gamerule);
};

export default runGameProgression;
