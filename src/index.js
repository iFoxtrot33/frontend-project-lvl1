import readlineSync from 'readline-sync';

const startGame = (gameData, gamerule) => {
  let clientAnswer;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gamerule);
  for (let i = 0; i < gameData.length; i += 2) {
    console.log(`Question: ${gameData[i]}`);
    clientAnswer = readlineSync.question('Your answer: ');
    if ((clientAnswer) === (gameData[i + 1])) {
      console.log('Correct!');
    } else {
      console.log(`${clientAnswer} is wrong answer ;(. Correct answer was ${gameData[i + 1]}.
        Let's try again, ${userName}!`);
      break;
    }
    if (i === 4) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default startGame;
