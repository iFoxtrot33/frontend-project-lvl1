import readlineSync from 'readline-sync';

const startGame = (gameData, gamerule) => {
  let clientAnswer;
  const gameQuestion = 0;
  const rightAnswer = 1;
  const requiredVictories = 2;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gamerule);
  for (let round = 0; round < gameData.length; round += 1) {
    console.log(`Question: ${gameData[round][gameQuestion]}`);
    clientAnswer = readlineSync.question('Your answer: ');
    if ((clientAnswer) !== (gameData[round][rightAnswer])) {
      console.log(`${clientAnswer} is wrong answer ;(. Correct answer was ${gameData[round][rightAnswer]}.
        Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
      if (round === requiredVictories) {
        console.log(`Congratulations, ${userName}!`);
      }
    }
  }
};

export default startGame;
