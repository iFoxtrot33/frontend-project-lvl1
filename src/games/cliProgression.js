import getRandomNumber from '../helpers.js';

import startGame from '../index.js';

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
  const gameData = [];
  let gameRound = [];
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const step = getRandomNumber(1, 10);
    const progressionLength = getRandomNumber(7, 10);
    const progression = makeProgression(step, progressionLength, firstNumber);
    const hiddenAnswer = getRandomNumber(1, progressionLength);
    const temp = ((progression[hiddenAnswer]).toString());
    progression[hiddenAnswer] = '..';
    gameRound.push(`${progression.join(' ')}`);
    gameRound.push(temp);
    gameData.push(gameRound);
    gameRound = [];
  }
  startGame(gameData, gamerule);
};

export default runGameProgression;
