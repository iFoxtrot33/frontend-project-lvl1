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

const startGame = (askOne, askTwo, askThree, ansOne, ansTwo, ansThree, gamerule) => {
  const arrAsk = [askOne, askTwo, askThree];
  const arrAns = [ansOne, ansTwo, ansThree];
  let clientAnswer;
  const userName = (runGreetings());
  console.log(gamerule);
  for (let i = 0; i < arrAsk.length; i += 1) {
    askGameQuestion(arrAsk[i]);
    clientAnswer = askAnswer();
    if ((clientAnswer) === (arrAns[i])) {
      console.log('Correct!');
    } else {
      runWrongAnswer(clientAnswer, userName, arrAns[i]);
      break;
    }
    if (i === 2) {
      runVictory(userName);
    }
  }
};

export default startGame;
