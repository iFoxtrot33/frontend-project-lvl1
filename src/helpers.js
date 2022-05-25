import readlineSync from 'readline-sync';

export const runGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const askGameQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const askAnswer = () => readlineSync.question('Your answer: ');

export const runWrongAnswer = (clientAnswer, userName, correctAnswer) => {
  console.log(`${clientAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${userName}!`);
};

export const runVictory = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const findMax = (arr) => {
  let m = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (m < arr[i]) {
      m = arr[i];
    }
  }
  return m;
};

export const calcDividers = (num) => {
  const arr = [];
  for (let k = 0; k <= num; k += 1) {
    if ((num % k) === 0) {
      arr.push(k);
    }
  }
  return arr;
};

export const makeProgression = (value, length, first) => {
  const result = [];
  let one = first;
  for (let i = 0; i < length; i += 1) {
    result.push(one);
    one += value;
  }
  return result;
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
