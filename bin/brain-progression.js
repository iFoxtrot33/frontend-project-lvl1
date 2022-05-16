#!/usr/bin/env node
import {
  hiddenElement, makeRandom, makeRandomNoZero, makeProgression,
} from '../helpers.js';

import startGame from '../src/game-engine.js';

const runGameProgression = () => {
  const gameRule = 'What number is missing in the progression?';
  let firstNumber = makeRandom(101);
  let step = makeRandomNoZero(10);
  const arrSteps = [6, 7, 8, 9, 10];
  let randomLength = arrSteps[makeRandom(arrSteps.length)];
  let progression = makeProgression(step, randomLength, firstNumber);
  let hiddenAnswer = hiddenElement(randomLength) - 1;
  const ans1 = (progression[hiddenAnswer]).toString();
  progression[hiddenAnswer] = '..';
  const first = `${progression.join(' ')}`;
  randomLength = arrSteps[makeRandom(arrSteps.length)];
  step = makeRandomNoZero(10);
  firstNumber = makeRandom(101);
  progression = makeProgression(step, randomLength, firstNumber);
  hiddenAnswer = hiddenElement(randomLength) - 1;
  const ans2 = (progression[hiddenAnswer]).toString();
  progression[hiddenAnswer] = '..';
  const second = `${progression.join(' ')}`;
  randomLength = arrSteps[makeRandom(arrSteps.length)];
  step = makeRandomNoZero(10);
  firstNumber = makeRandom(101);
  progression = makeProgression(step, randomLength, firstNumber);
  hiddenAnswer = hiddenElement(randomLength) - 1;
  const ans3 = (progression[hiddenAnswer]).toString();
  progression[hiddenAnswer] = '..';
  const third = `${progression.join(' ')}`;
  return startGame(first, second, third, ans1, ans2, ans3, gameRule);
};
console.log(runGameProgression());

export default runGameProgression;
