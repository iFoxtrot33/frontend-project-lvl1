import {
  greetings, gameQuestion, answer, wrongAnswer, victory,
} from './gameEngine.js';

const even = () => {
  const name = (greetings());
  // Gamerule
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // All numbers are in range from 0 to 100
  const firstNumber = Math.floor(Math.random() * 101);
  const secondNumber = Math.floor(Math.random() * 101);
  const thirdNumber = Math.floor(Math.random() * 101);
  // Commence of the first round
  console.log(gameQuestion(firstNumber));
  let clientAnswer = answer();
  if (((firstNumber % 2) === 0) && (clientAnswer === 'yes')) {
    console.log('Correct!');
  } else if (((firstNumber % 2) !== 0) && (clientAnswer === 'no')) {
    console.log('Correct!');
  } else if (clientAnswer === 'yes') {
    return wrongAnswer(clientAnswer, name, 'no');
  } else if (clientAnswer === 'no') {
    return wrongAnswer(clientAnswer, name, 'yes');
  } else if (((clientAnswer !== 'no') && (firstNumber % 2) === 0)) {
    return wrongAnswer(clientAnswer, name, 'yes');
  } else if (((clientAnswer !== 'yes') && (firstNumber % 2) !== 0)) {
    return wrongAnswer(clientAnswer, name, 'no');
  }
  // Commence of the second round
  console.log(gameQuestion(secondNumber));
  clientAnswer = answer();
  if (((secondNumber % 2) === 0) && (clientAnswer === 'yes')) {
    console.log('Correct!');
  } else if (((secondNumber % 2) !== 0) && (clientAnswer === 'no')) {
    console.log('Correct!');
  } else if (clientAnswer === 'yes') {
    return wrongAnswer(clientAnswer, name, 'no');
  } else if (clientAnswer === 'no') {
    return wrongAnswer(clientAnswer, name, 'yes');
  } else if (((clientAnswer !== 'no') && (secondNumber % 2) === 0)) {
    return wrongAnswer(clientAnswer, name, 'yes');
  } else if (((clientAnswer !== 'yes') && (secondNumber % 2) !== 0)) {
    return wrongAnswer(clientAnswer, name, 'no');
  }
  // Commence of the third round
  console.log(gameQuestion(thirdNumber));
  clientAnswer = answer();
  if (((thirdNumber % 2) === 0) && (clientAnswer === 'yes')) {
    console.log('Correct!');
  } else if (((thirdNumber % 2) !== 0) && (clientAnswer === 'no')) {
    console.log('Correct!');
  } else if (clientAnswer === 'yes') {
    return wrongAnswer(clientAnswer, name, 'no');
  } else if (clientAnswer === 'no') {
    return wrongAnswer(clientAnswer, name, 'yes');
  } else if (((clientAnswer !== 'no') && (thirdNumber % 2) === 0)) {
    return wrongAnswer(clientAnswer, name, 'yes');
  } else if (((clientAnswer !== 'yes') && (thirdNumber % 2) !== 0)) {
    return wrongAnswer(clientAnswer, name, 'no');
  }
  return victory(name);
};

export default even;
