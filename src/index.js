import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

export const startGame = (gameData, gamerule) => {
  let clientAnswer;
  const gameQuestion = 0;
  const rightAnswer = 1;
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
      if (wins === numberOfRounds) {
        console.log(`Congratulations, ${userName}!`);
      }
    }
  }
};
