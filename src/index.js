import readlineSync from 'readline-sync';

const runGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const askGameQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const askAnswer = () => readlineSync.question('Your answer: ');

const runWrongAnswer = (clientAnswer, userName, correctAnswer) => {
  console.log(`${clientAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${userName}!`);
};

export const runVictory = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

const startGame = (gameData, gamerule) => {
  let clientAnswer;
  const userName = (runGreetings());
  console.log(gamerule);
  for (let i = 0; i < gameData.length; i += 2) {
    askGameQuestion(gameData[i]);
    clientAnswer = askAnswer();
    if ((clientAnswer) === (gameData[i + 1])) {
      console.log('Correct!');
    } else {
      runWrongAnswer(clientAnswer, userName, gameData[i + 1]);
      break;
    }
    if (i === 4) {
      runVictory(userName);
    }
  }
};

export default startGame;
