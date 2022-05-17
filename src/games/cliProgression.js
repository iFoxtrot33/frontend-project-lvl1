import {
  hiddenElement, makeRandom, makeRandomNoZero, makeProgression, runVictory, runGreetings,
} from '../../helpers.js';

import startGame from '../game-engine.js';

const runGameProgression = () => {
  const gameRule = 'What number is missing in the progression?';
  let firstNumber;
  let step;
  let randomLength;
  let progression;
  let hiddenAnswer;
  let ans;
  let first;
  let result;
  const arrSteps = [6, 7, 8, 9, 10];
  const userName = (runGreetings());
  console.log(gameRule);
  for (let i = 0; i < 3; i += 1) {
    firstNumber = makeRandom(101);
    step = makeRandomNoZero(10);
    randomLength = arrSteps[makeRandom(arrSteps.length)];
    progression = makeProgression(step, randomLength, firstNumber);
    hiddenAnswer = hiddenElement(randomLength) - 1;
    ans = (progression[hiddenAnswer]).toString();
    progression[hiddenAnswer] = '..';
    first = `${progression.join(' ')}`;
    result = startGame(first, ans, userName);
    if (result === 0) {
      break;
    }
    if (i === 2) {
      runVictory(userName);
    }
  }
};

export default runGameProgression;
