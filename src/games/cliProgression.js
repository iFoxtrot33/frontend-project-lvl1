import {
  hiddenElement, makeRandom, makeRandomNoZero, makeProgression, runVictory, runGreetings,
} from '../../helpers.js';

import startGame from '../game-engine.js';

const runGameProgression = () => {
  const arrSteps = [6, 7, 8, 9, 10];
  const userName = (runGreetings());
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = makeRandom(101);
    const step = makeRandomNoZero(10);
    const randomLength = arrSteps[makeRandom(arrSteps.length)];
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
