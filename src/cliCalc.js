import {
  greetings, gameQuestion, answer, wrongAnswer, victory,
} from './gameEngine.js';

const runCalcGame = () => {
  // First number with the range from 0 to 100
  let firstNumber = Math.floor(Math.random() * 101);
  // Second number with the range from 0 to 100
  let secondNumber = Math.floor(Math.random() * 101);
  // Range for math sign from 0 to 2 (+-*)
  let sign = Math.floor(Math.random() * 3);
  // For users input
  let clientAnswer = 0;
  // Greetings
  const name = (greetings());
  console.log('What is the result of the expression?');
  // Chosing the sign of expression and taking user's answer
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
  // Deciding whether user's answer is correct or not
  if ((sign === 0) && ((firstNumber + secondNumber) === clientAnswer)) {
    console.log('Correct!');
  } else if ((sign === 0) && ((firstNumber + secondNumber) !== clientAnswer)) {
    return wrongAnswer(clientAnswer, name, clientAnswer);
  }
  if ((sign === 1) && ((firstNumber - secondNumber) === clientAnswer)) {
    console.log('Correct!');
  } else if ((sign === 1) && ((firstNumber - secondNumber) !== clientAnswer)) {
    return wrongAnswer(clientAnswer, name, firstNumber - secondNumber);
  }
  if ((sign === 2) && ((firstNumber * secondNumber) === clientAnswer)) {
    console.log('Correct!');
  } else if ((sign === 2) && ((firstNumber * secondNumber) !== clientAnswer)) {
    return wrongAnswer(clientAnswer, name, firstNumber * secondNumber);
  }
  // First round completed. In case if the user is corret we continue the game
  // Commence of the second round
  firstNumber = Math.floor(Math.random() * 101);
  secondNumber = Math.floor(Math.random() * 101);
  sign = Math.floor(Math.random() * 3);
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
  // Deciding whether user's answer is correct or not
  if ((sign === 0) && ((firstNumber + secondNumber) === clientAnswer)) {
    console.log('Correct!');
  } else if ((sign === 0) && ((firstNumber + secondNumber) !== clientAnswer)) {
    return wrongAnswer(clientAnswer, name, clientAnswer);
  }
  if ((sign === 1) && ((firstNumber - secondNumber) === clientAnswer)) {
    console.log('Correct!');
  } else if ((sign === 1) && ((firstNumber - secondNumber) !== clientAnswer)) {
    return wrongAnswer(clientAnswer, name, firstNumber - secondNumber);
  }
  if ((sign === 2) && ((firstNumber * secondNumber) === clientAnswer)) {
    console.log('Correct!');
  } else if ((sign === 2) && ((firstNumber * secondNumber) !== clientAnswer)) {
    return wrongAnswer(clientAnswer, name, firstNumber * secondNumber);
  }
  // Commence of the third round
  firstNumber = Math.floor(Math.random() * 101);
  secondNumber = Math.floor(Math.random() * 101);
  sign = Math.floor(Math.random() * 3);
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
  // Deciding whether user's answer is correct or not
  if ((sign === 0) && ((firstNumber + secondNumber) === clientAnswer)) {
    console.log('Correct!');
  } else if ((sign === 0) && ((firstNumber + secondNumber) !== clientAnswer)) {
    return wrongAnswer(clientAnswer, name, clientAnswer);
  }
  if ((sign === 1) && ((firstNumber - secondNumber) === clientAnswer)) {
    console.log('Correct!');
  } else if ((sign === 1) && ((firstNumber - secondNumber) !== clientAnswer)) {
    return wrongAnswer(clientAnswer, name, firstNumber - secondNumber);
  }
  if ((sign === 2) && ((firstNumber * secondNumber) === clientAnswer)) {
    console.log('Correct!');
  } else if ((sign === 2) && ((firstNumber * secondNumber) !== clientAnswer)) {
    return wrongAnswer(clientAnswer, name, firstNumber * secondNumber);
  }
  // Final words in case of victory
  return victory(name);
};
console.log(runCalcGame());

export default runCalcGame;
