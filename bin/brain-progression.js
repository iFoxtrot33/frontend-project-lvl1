#!/usr/bin/env node
import {
  runGreetings, gameQuestion, answer, victory, hiddenElement, makeRandom, makeRandomNoZero,
} from '../helpers.js';

import startRound from '../src/game-engine.js';

const runGameProgression = () => {
  const name = (runGreetings());
  console.log('What number is missing in the progression?');
  let firstNumber = makeRandom(101);
  let step = makeRandomNoZero(10);
  const arrSteps = [6, 7, 8, 9, 10];
  let randomLength = arrSteps[Math.floor(Math.random() * (arrSteps.length))];
  let progression = [];
  let hiddenAnswer;
  let clientAnswer;
  let ans;
  let temp;
  for (let i = 0; i < randomLength; i += 1) {
    progression.push(firstNumber);
    firstNumber += step;
  }
  hiddenAnswer = hiddenElement(randomLength) - 1;
  ans = progression[hiddenAnswer];
  progression[hiddenAnswer] = '..';
  console.log(gameQuestion(`${progression.join(' ')}`));
  clientAnswer = answer() * 1;
  ans *= 1;
  temp = startRound(clientAnswer, name, ans);
  if (temp.length === 8) {
    console.log(temp);
  } else {
    return temp;
  }
  randomLength = arrSteps[Math.floor(Math.random() * (arrSteps.length))];
  step = makeRandomNoZero(10);
  firstNumber = makeRandom(101);
  progression = [];
  ans = 0;
  for (let i = 0; i < randomLength; i += 1) {
    progression.push(firstNumber);
    firstNumber += step;
  }
  hiddenAnswer = hiddenElement(randomLength) - 1;
  ans = progression[hiddenAnswer];
  progression[hiddenAnswer] = '..';
  console.log(gameQuestion(`${progression.join(' ')}`));
  clientAnswer = answer() * 1;
  ans *= 1;
  temp = startRound(clientAnswer, name, ans);
  if (temp.length === 8) {
    console.log(temp);
  } else {
    return temp;
  }
  randomLength = arrSteps[Math.floor(Math.random() * (arrSteps.length))];
  step = makeRandomNoZero(10);
  firstNumber = makeRandom(101);
  progression = [];
  ans = 0;
  for (let i = 0; i < randomLength; i += 1) {
    progression.push(firstNumber);
    firstNumber += step;
  }
  hiddenAnswer = hiddenElement(randomLength) - 1;
  ans = progression[hiddenAnswer];
  progression[hiddenAnswer] = '..';
  console.log(gameQuestion(`${progression.join(' ')}`));
  clientAnswer = answer() * 1;
  ans *= 1;
  temp = startRound(clientAnswer, name, ans);
  if (temp.length === 8) {
    console.log(temp);
  } else {
    return temp;
  }
  return victory(name);
};
console.log(runGameProgression());

export default runGameProgression;
