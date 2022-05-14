import {
  greetings, gameQuestion, answer, wrongAnswer, victory, hiddenElement,
} from '../helpers.js';

const runGameProgression = () => {
  const name = (greetings());
  console.log('What number is missing in the progression?');
  let firstNumber = Math.floor(Math.random() * 101);
  let step = Math.floor((Math.random() + 0.1) * 10);
  const arrSteps = [6, 7, 8, 9, 10];
  let randomLength = arrSteps[Math.floor(Math.random() * (arrSteps.length))];
  let progression = [];
  let hiddenAnswer;
  let clientAnswer;
  let ans;
  for (let i = 0; i < randomLength; i += 1) {
    progression.push(firstNumber);
    firstNumber += step;
  }
  hiddenAnswer = hiddenElement(randomLength) - 1;
  ans = progression[hiddenAnswer];
  progression[hiddenAnswer] = '..';
  console.log(gameQuestion(`${progression.join(' ')}`));
  clientAnswer = answer();
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
  console.log(gameQuestion(`${progression.join(' ')}`));
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
  console.log(gameQuestion(`${progression.join(' ')}`));
  clientAnswer = answer();
  if ((clientAnswer * 1) === (ans * 1)) {
    console.log('Correct!');
  } else {
    return wrongAnswer(clientAnswer, name, ans);
  }
  return victory(name);
};

export default runGameProgression;
