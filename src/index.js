import readlineSync from 'readline-sync';

const startGame = (gameData, gamerule) => {
  let clientAnswer;
  const gameQuestion = 0;
  const rightAnswer = 1;
  const requiredVictories = 3;
  let wins = 0;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gamerule);
  // eslint-disable-next-line no-restricted-syntax
  for (const round of gameData) {
    console.log(`Question: ${round[gameQuestion]}`);
    clientAnswer = readlineSync.question('Your answer: ');
    if ((clientAnswer) !== (round[rightAnswer])) {
      console.log(`${clientAnswer} is wrong answer ;(. Correct answer was ${round[rightAnswer]}.
        Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
      wins += 1;
      if (wins === requiredVictories) {
        console.log(`Congratulations, ${userName}!`);
      }
    }
  }
};

export default startGame;
