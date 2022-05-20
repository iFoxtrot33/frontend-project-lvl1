import {
  hiddenElement, getRandomNumber, makeProgression, runVictory, runGreetings,
} from '../../helpers.js';

import startGame from '../game-engine.js';

const runGameProgression = () => {
  const userName = (runGreetings());
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const step = getRandomNumber(1, 10);
    const randomLength = getRandomNumber(6, 10);
    const progression = makeProgression(step, randomLength, firstNumber);
    const hiddenAnswer = hiddenElement(randomLength) - 1;
    const ans = (progression[hiddenAnswer]).toString();
    progression[hiddenAnswer] = '..';
    const first = `${progression.join(' ')}`;
    const result = startGame(first, ans, userName);
    if (result === 0) {
      break;
    }
    if (i === 2) {
      runVictory(userName);
    }
  }
};

export default runGameProgression;
