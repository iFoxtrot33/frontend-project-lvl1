import getRandomNumber from '../helpers.js';

import { startGame, numberOfRounds } from '../index.js';

const makeProgression = (step, progressionLength, firstNumber) => {
  const result = [];
  let progressionValue = firstNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(progressionValue);
    progressionValue += step;
  }
  return result;
};

const runGameProgression = () => {
  const gamerule = 'What number is missing in the progression?';
  const gameRounds = [];
  let gameRound = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const step = getRandomNumber(1, 10);
    const progressionLength = getRandomNumber(6, 9);
    const progression = makeProgression(step, progressionLength, firstNumber);
    const hiddenIndex = getRandomNumber(1, progressionLength - 1);
    const temp = (progression[hiddenIndex]).toString();
    progression[hiddenIndex] = '..';
    gameRound = [progression.join(' '), temp];
    gameRounds.push(gameRound);
  }
  startGame(gameRounds, gamerule);
};

export default runGameProgression;
