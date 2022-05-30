import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

export const startGame = (gameData, gamerule) => {
  let clientAnswer;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gamerule);
  for (let i = 0; i < gameData.length; i += 1) {
    const [gameQuestion, rightAnswer] = gameData[i];
    console.log(`Question: ${gameQuestion}`);
    clientAnswer = readlineSync.question('Your answer: ');
    if (clientAnswer !== rightAnswer) {
      return console.log(`${clientAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.
        Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};
