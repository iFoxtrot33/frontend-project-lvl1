import readlineSync from 'readline-sync';

export const runGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const gameQuestion = (question) => `Question: ${question}`;

export const answer = () => readlineSync.question('Your answer: ');

export const wrongAnswer = (clientAnswer, userName, correctAnswer) => `
${clientAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${userName}!`;

export const victory = (userName) => `Congratulations, ${userName}!`;

// Function to find max value in array
export const findMax = (arr) => {
  let m = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (m < arr[i]) {
      m = arr[i];
    }
  }
  return m;
};

// Function to find divider
export const calcDividers = (num) => {
  const arr = [];
  for (let k = 0; k <= num; k += 1) {
    if ((num % k) === 0) {
      arr.push(k);
    }
  }
  return arr;
};

// Definning the hidden number of the progression with the separate function
export const hiddenElement = (num) => {
  let hiddenAnswer = Math.floor((Math.random() + 0.2) * 10);
  while (num < hiddenAnswer) {
    hiddenAnswer = Math.floor((Math.random() + 0.2) * 10);
  }
  return hiddenAnswer;
};

export const makeRandom = (num) => Math.floor(Math.random() * num);

export const makeRandomNoZero = (num) => Math.floor(((Math.random()) * num) + 1);
