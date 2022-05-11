import readlineSync from 'readline-sync';
import {
  greetings, gameQuestion, answer, wrongAnswer, victory,
} from './gameEngine.js';

// Function to find max value in array
const max = (arr) => {
  let temp;
  let m = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (m < arr[i]) {
      m = arr[i];
    }
  }
  return m;
};

// Function to find divider
const calcDividers = (num) => {
  const arr = [];
  for (let i = 0; i <= num; i += 1) {
    if ((num % i) === 0) {
      arr.push(i);
    }
  }
  return arr;
};

// Commence the game
const gameGcd = () => {
  const name = (greetings());
  // Gamerule
  console.log('Find the greatest common divisor of given numbers.');
  // All numbers are in range from 1 to 100
  let firstNumber = Math.floor((Math.random() + 0.01) * 100);
  let secondNumber = Math.floor((Math.random() + 0.01) * 100);
  // Arreys for first and second number's dividers
  let firstArr = [];
  let secondArr = [];
  // Arrey for the for the common dividers
  let bothArr = [];
  let maxDivider;
  let clientAnswer;
  // Starting the loop to find all dividers for the first number
  firstArr = calcDividers(firstNumber);
  // Starting the loop to find all dividers for the second number
  secondArr = calcDividers(secondNumber);
  // Starting the loop to find all common dividers
  for (let i = 0; i < firstArr.length; i += 1) {
    if (secondArr.includes(firstArr[i]) === true) {
      bothArr.push(firstArr[i]);
    }
  }
  // Finding max divider
  maxDivider = max(bothArr);
  console.log(gameQuestion(`${firstNumber} ${secondNumber}`));
  clientAnswer = answer();
  clientAnswer *= 1;
  if (maxDivider === clientAnswer) {
    console.log('Correct!');
  } else {
    return wrongAnswer(clientAnswer, name, maxDivider);
  }
  // Commence of the second round
  firstNumber = Math.floor((Math.random() + 0.01) * 100);
  secondNumber = Math.floor((Math.random() + 0.01) * 100);
  firstArr = [];
  secondArr = [];
  firstArr = calcDividers(firstNumber);
  secondArr = calcDividers(secondNumber);
  bothArr = [];
  for (let i = 0; i < firstArr.length; i += 1) {
    if (secondArr.includes(firstArr[i]) === true) {
      bothArr.push(firstArr[i]);
    }
  }
  maxDivider = max(bothArr);
  console.log(gameQuestion(`${firstNumber} ${secondNumber}`));
  clientAnswer = answer();
  clientAnswer *= 1;
  if (maxDivider === clientAnswer) {
    console.log('Correct!');
  } else {
    return wrongAnswer(clientAnswer, name, maxDivider);
  }
  // Commence of the third round
  firstNumber = Math.floor((Math.random() + 0.01) * 100);
  secondNumber = Math.floor((Math.random() + 0.01) * 100);
  firstArr = [];
  secondArr = [];
  firstArr = calcDividers(firstNumber);
  secondArr = calcDividers(secondNumber);
  bothArr = [];
  for (let i = 0; i < firstArr.length; i += 1) {
    if (secondArr.includes(firstArr[i]) === true) {
      bothArr.push(firstArr[i]);
    }
  }
  maxDivider = max(bothArr);
  console.log(gameQuestion(`${firstNumber} ${secondNumber}`));
  clientAnswer = answer();
  clientAnswer *= 1;
  if (maxDivider === clientAnswer) {
    console.log('Correct!');
  } else {
    return wrongAnswer(clientAnswer, name, maxDivider);
  }
  // Final words in case of victory
  return victory(name);
};

export default gameGcd;
