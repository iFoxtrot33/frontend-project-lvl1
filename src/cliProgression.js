import {
  greetings, gameQuestion, answer, wrongAnswer, victory,
} from './gameEngine.js';

// Definning the hidden number of the progression with the separate function
const hiddenElement = (num) => {
  let hiddenAnswer = Math.floor((Math.random() + 0.1) * 10);
  while (num < hiddenAnswer) {
    hiddenAnswer = Math.floor((Math.random() + 0.1) * 10);
  }
  return hiddenAnswer;
};

// The progression game
const gameProgression = () => {
  // Greetings
  const name = (greetings());
  // Gamerule
  console.log('What number is missing in the progression?');
  // Defining 1st element of the progression
  let firstNumber = Math.floor(Math.random() * 101);
  // Defining a step of the progression
  let step = Math.floor((Math.random() + 0.1) * 10);
  // Defining random length of the progression
  const arrSteps = [6, 7, 8, 9, 10];
  let randomLength = arrSteps[Math.floor(Math.random() * (arrSteps.length))];
  // The array for keeping progression numbers
  let progression = [];
  // For keeping the hidden number
  let hiddenAnswer;
  let clientAnswer;
  let ans;
  // Forming the progression
  for (let i = 0; i < randomLength; i += 1) {
    progression.push(firstNumber);
    firstNumber += step;
  }
  // Hiding random element
  hiddenAnswer = hiddenElement(randomLength) - 1;
  // Recording the correct answer
  ans = progression[hiddenAnswer];
  // Hiding the answer in progression
  progression[hiddenAnswer] = '..';
  // Asking the client his opinion
  console.log(gameQuestion(`${progression.toString()}`));
  clientAnswer = answer();
  // Also converting our answer and client answer to from strings to numbers
  if ((clientAnswer * 1) === (ans * 1)) {
    console.log('Correct!');
  } else {
    return wrongAnswer(clientAnswer, name, ans);
  }
  // Second round
  randomLength = arrSteps[Math.floor(Math.random() * (arrSteps.length))];
  step = Math.floor((Math.random() + 0.1) * 10);
  firstNumber = Math.floor(Math.random() * 101);
  progression = [];
  ans = 0;
  for (let i = 0; i < randomLength; i += 1) {
    progression.push(firstNumber);
    firstNumber += step;
  }
  hiddenAnswer = hiddenElement(randomLength) - 1;
  ans = progression[hiddenAnswer];
  progression[hiddenAnswer] = '..';
  console.log(gameQuestion(`${progression.toString()}`));
  clientAnswer = answer();
  if ((clientAnswer * 1) === (ans * 1)) {
    console.log('Correct!');
  } else {
    return wrongAnswer(clientAnswer, name, ans);
  }
  // Third round
  randomLength = arrSteps[Math.floor(Math.random() * (arrSteps.length))];
  step = Math.floor((Math.random() + 0.1) * 10);
  firstNumber = Math.floor(Math.random() * 101);
  progression = [];
  ans = 0;
  for (let i = 0; i < randomLength; i += 1) {
    progression.push(firstNumber);
    firstNumber += step;
  }
  hiddenAnswer = hiddenElement(randomLength) - 1;
  ans = progression[hiddenAnswer];
  progression[hiddenAnswer] = '..';
  console.log(gameQuestion(`${progression.toString()}`));
  clientAnswer = answer();
  if ((clientAnswer * 1) === (ans * 1)) {
    console.log('Correct!');
  } else {
    return wrongAnswer(clientAnswer, name, ans);
  }
  return victory(name);
};

export default gameProgression;
