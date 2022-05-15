#!/usr/bin/env node
import {
  runGreetings, gameQuestion, answer, makeRandom, victory,
} from '../helpers.js';

import startRound from '../src/game-engine.js';

const runBrainEven = () => {
  const name = (runGreetings());
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const firstNumber = makeRandom(100);
  const secondNumber = makeRandom(100);
  const thirdNumber = makeRandom(100);
  console.log(gameQuestion(firstNumber));
  let clientAnswer = answer();
  let temp;
  let ans;
  if ((firstNumber % 2) === 0) {
    ans = 'yes';
  } else {
    ans = 'no';
  }
  temp = startRound(clientAnswer, name, ans);
  if (temp.length === 8) {
    console.log(temp);
  } else {
    return temp;
  }
  console.log(gameQuestion(secondNumber));
  clientAnswer = answer();
  if ((secondNumber % 2) === 0) {
    ans = 'yes';
  } else {
    ans = 'no';
  }
  temp = startRound(clientAnswer, name, ans);
  if (temp.length === 8) {
    console.log(temp);
  } else {
    return temp;
  }
  console.log(gameQuestion(thirdNumber));
  clientAnswer = answer();
  if ((thirdNumber % 2) === 0) {
    ans = 'yes';
  } else {
    ans = 'no';
  }
  temp = startRound(clientAnswer, name, ans);
  if (temp.length === 8) {
    console.log(temp);
  } else {
    return temp;
  }
  return victory(name);
};
console.log(runBrainEven());

export default runBrainEven;
