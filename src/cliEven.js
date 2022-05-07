import readlineSync from 'readline-sync';

const evenGame = () => {
  // Greetings
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  // Gamerule
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // All numbers are in range from 0 to 100
  const firstNumber = Math.floor(Math.random() * 101);
  const secondNumber = Math.floor(Math.random() * 101);
  const thirdNumber = Math.floor(Math.random() * 101);
  // Commence of the first round
  console.log(firstNumber);
  let clientAnswer = readlineSync.question('Question:');
  if (((firstNumber % 2) === 0) && (clientAnswer === 'yes')) {
    console.log('Correct!');
  } else if (((firstNumber % 2) !== 0) && (clientAnswer === 'no')) {
    console.log('Correct!');
  } else if (clientAnswer === 'yes') {
    return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. 
      Let's try again, ${userName}!`);
  } else if (clientAnswer === 'no') {
    return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
        Let's try again, ${userName}!`);
  }
  // Commence of the second round
  console.log(secondNumber);
  clientAnswer = readlineSync.question('Question:');
  if (((secondNumber % 2) === 0) && (clientAnswer === 'yes')) {
    console.log('Correct!');
  } else if (((secondNumber % 2) !== 0) && (clientAnswer === 'no')) {
    console.log('Correct!');
  } else if (clientAnswer === 'yes') {
    return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. 
      Let's try again, ${userName}!`);
  } else if (clientAnswer === 'no') {
    return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
        Let's try again, ${userName}!`);
  }
  // Commence of the third round
  console.log(thirdNumber);
  clientAnswer = readlineSync.question('Question:');
  if (((thirdNumber % 2) === 0) && (clientAnswer === 'yes')) {
    console.log('Correct!');
  } else if (((thirdNumber % 2) !== 0) && (clientAnswer === 'no')) {
    console.log('Correct!');
  } else if (clientAnswer === 'yes') {
    return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. 
        Let's try again, ${userName}!`);
  } else if (clientAnswer === 'no') {
    return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
          Let's try again, ${userName}!`);
  }
  // Final words in case of victory
  return console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
