#!/usr/bin/env node
import {
  hiddenElement, makeRandom, makeRandomNoZero,
} from '../helpers.js';

import startGame from '../src/game-engine.js';

const runGameProgression = () => {
  const gameRule = 'What number is missing in the progression?';
  let firstNumber = makeRandom(101);
  let step = makeRandomNoZero(10);
  const arrSteps = [6, 7, 8, 9, 10];
  let randomLength = arrSteps[Math.floor(Math.random() * (arrSteps.length))];
  let progression = [];
  let hiddenAnswer;
  for (let i = 0; i < randomLength; i += 1) {
    progression.push(firstNumber);
    firstNumber += step;
  }
  hiddenAnswer = hiddenElement(randomLength) - 1;
  const ans1 = (progression[hiddenAnswer]).toString();
  progression[hiddenAnswer] = '..';
  const first = `${progression.join(' ')}`;
  randomLength = arrSteps[Math.floor(Math.random() * (arrSteps.length))];
  step = makeRandomNoZero(10);
  firstNumber = makeRandom(101);
  progression = [];
  for (let i = 0; i < randomLength; i += 1) {
    progression.push(firstNumber);
    firstNumber += step;
  }
  hiddenAnswer = hiddenElement(randomLength) - 1;
  const ans2 = (progression[hiddenAnswer]).toString();
  progression[hiddenAnswer] = '..';
  const second = `${progression.join(' ')}`;
  randomLength = arrSteps[Math.floor(Math.random() * (arrSteps.length))];
  step = makeRandomNoZero(10);
  firstNumber = makeRandom(101);
  progression = [];
  for (let i = 0; i < randomLength; i += 1) {
    progression.push(firstNumber);
    firstNumber += step;
  }
  hiddenAnswer = hiddenElement(randomLength) - 1;
  const ans3 = (progression[hiddenAnswer]).toString();
  progression[hiddenAnswer] = '..';
  const third = `${progression.join(' ')}`;
  return startGame(first, second, third, ans1, ans2, ans3, gameRule);
};
console.log(runGameProgression());

export default runGameProgression;
