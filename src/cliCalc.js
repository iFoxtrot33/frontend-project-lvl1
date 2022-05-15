import {
  greetings, gameQuestion, answer, makeRandom, victory,
} from '../helpers.js';

import startRound from './game-engine.js';

const runCalcGame = () => {
  let firstNumber = makeRandom(101);
  let secondNumber = makeRandom(101);
  let thirdNumber;
  let forthNumber;
  let fifthNumber;
  let sixNumber;
  let sign = makeRandom(3);
  let clientAnswer = 0;
  let temp;
  const name = (greetings());
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
    thirdNumber = makeRandom(101);
    forthNumber = makeRandom(101);
    sign = makeRandom(3);
    if (sign === 0) {
      console.log(gameQuestion(`${thirdNumber} + ${forthNumber}`));
      clientAnswer = answer();
    } else if (sign === 1) {
      console.log(gameQuestion(`${thirdNumber} - ${forthNumber}`));
      clientAnswer = answer();
    } else if (sign === 2) {
      console.log(gameQuestion(`${thirdNumber} * ${forthNumber}`));
      clientAnswer = answer();
    }
    clientAnswer *= 1;
    if (sign === 0) {
      temp = startRound(clientAnswer, name, thirdNumber + forthNumber);
    }
    if (sign === 1) {
      temp = startRound(clientAnswer, name, thirdNumber - forthNumber);
    }
    if (sign === 2) {
      temp = startRound(clientAnswer, name, thirdNumber * forthNumber);
    }
    if (temp.length === 8) {
      console.log(temp);
    } else {
      return temp;
    }
  }

  if (temp.length === 8) {
    fifthNumber = makeRandom(101);
    sixNumber = makeRandom(101);
    sign = makeRandom(3);
    if (sign === 0) {
      console.log(gameQuestion(`${fifthNumber} + ${sixNumber}`));
      clientAnswer = answer();
    } else if (sign === 1) {
      console.log(gameQuestion(`${fifthNumber} - ${sixNumber}`));
      clientAnswer = answer();
    } else if (sign === 2) {
      console.log(gameQuestion(`${fifthNumber} * ${sixNumber}`));
      clientAnswer = answer();
    }
    clientAnswer *= 1;
    if (sign === 0) {
      temp = startRound(clientAnswer, name, fifthNumber + sixNumber);
    }
    if (sign === 1) {
      temp = startRound(clientAnswer, name, fifthNumber - sixNumber);
    }
    if (sign === 2) {
      temp = startRound(clientAnswer, name, fifthNumber * sixNumber);
    }
    if (temp.length === 8) {
      console.log(temp);
    } else {
      return temp;
    }
  }
  return victory(name);
};

export default runCalcGame;
