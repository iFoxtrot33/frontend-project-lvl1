import readlineSync from 'readline-sync';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const gameQuestion = (question) => `Question: ${question}`;

export const answer = () => readlineSync.question(`Your answer: `);

export const wrongAnswer = (clientAnswer, userName, correctAnswer) => `${clientAnswer}
is wrong answer ;(. Correct answer was ${correctAnswer}.
Lets try again, ${userName}!`;

export const victory = (userName) => `Congratulations, ${userName}!`;
