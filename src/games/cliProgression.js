import {
  hiddenElement, getRandomNumber, makeProgression,
} from '../helpers.js';

import startGame from '../game-engine.js';

const runGameProgression = () => {
  const gamerule = 'What number is missing in the progression?';
  const number = [];
  const expectedAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const step = getRandomNumber(1, 10);
    const randomLength = getRandomNumber(6, 10);
    const progression = makeProgression(step, randomLength, firstNumber);
    const hiddenAnswer = hiddenElement(randomLength) - 1;
    expectedAnswer.push((progression[hiddenAnswer]).toString());
    progression[hiddenAnswer] = '..';
    number.push(`${progression.join(' ')}`);
  }
  startGame(
    number[0],
    number[1],
    number[2],
    expectedAnswer[0],
    expectedAnswer[1],
    expectedAnswer[2],
    gamerule,
  );
};

export default runGameProgression;
