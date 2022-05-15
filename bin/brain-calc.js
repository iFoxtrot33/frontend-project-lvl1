#!/usr/bin/env node
import {
  runGreetings, gameQuestion, answer, makeRandom, victory,
} from '../helpers.js';

import startRound from '../src/game-engine.js';

const runCalcGame = () => {
  const firstNumber = makeRandom(101);
  const secondNumber = makeRandom(101);
  let sign = makeRandom(3);
  let clientAnswer = 0;
  let temp;
  const name = (runGreetings());
  console.log('What is the result of the expression?');
  if (sign === 0) {
    console.log(gameQuestion(`${firstNumber} + ${secondNumber}`));
    clientAnswer = answer();
  } else if (sign === 1) {
    console.log(gameQuestion(`${firstNumber} - ${secondNumber}`));
    clientAnswer = answer();
  } else if (sign === 2) {
    console.log(gameQuestion(`${firstNumber} * ${secondNumber}`));
    clientAnswer = answer();
  }
  clientAnswer *= 1;
  if (sign === 0) {
    temp = startRound(clientAnswer, name, firstNumber + secondNumber);
  }
  if (sign === 1) {
    temp = startRound(clientAnswer, name, firstNumber - secondNumber);
  }
  if (sign === 2) {
    temp = startRound(clientAnswer, name, firstNumber * secondNumber);
  }
  if (temp.length === 8) {
    console.log(temp);
  } else {
    return temp;
  }
  if (temp.length === 8) {
    sign = makeRandom(3);
    if (sign === 0) {
      console.log(gameQuestion(`${firstNumber} + ${secondNumber}`));
      clientAnswer = answer();
    } else if (sign === 1) {
      console.log(gameQuestion(`${firstNumber} - ${secondNumber}`));
      clientAnswer = answer();
    } else if (sign === 2) {
      console.log(gameQuestion(`${firstNumber} * ${secondNumber}`));
      clientAnswer = answer();
    }
    clientAnswer *= 1;
    if (sign === 0) {
      temp = startRound(clientAnswer, name, firstNumber + secondNumber);
    }
    if (sign === 1) {
      temp = startRound(clientAnswer, name, firstNumber - secondNumber);
    }
    if (sign === 2) {
      temp = startRound(clientAnswer, name, firstNumber * secondNumber);
    }
    if (temp.length === 8) {
      console.log(temp);
    } else {
      return temp;
    }
  }

  if (temp.length === 8) {
    sign = makeRandom(3);
    if (sign === 0) {
      console.log(gameQuestion(`${firstNumber} + ${secondNumber}`));
      clientAnswer = answer();
    } else if (sign === 1) {
      console.log(gameQuestion(`${firstNumber} - ${secondNumber}`));
      clientAnswer = answer();
    } else if (sign === 2) {
      console.log(gameQuestion(`${firstNumber} * ${secondNumber}`));
      clientAnswer = answer();
    }
    clientAnswer *= 1;
    if (sign === 0) {
      temp = startRound(clientAnswer, name, firstNumber + secondNumber);
    }
    if (sign === 1) {
      temp = startRound(clientAnswer, name, firstNumber - secondNumber);
    }
    if (sign === 2) {
      temp = startRound(clientAnswer, name, firstNumber * secondNumber);
    }
    if (temp.length === 8) {
      console.log(temp);
    } else {
      return temp;
    }
  }
  return victory(name);
};
console.log(runCalcGame());

export default runCalcGame;
