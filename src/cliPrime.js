import readlineSync from 'readline-sync';

// Checking wheather the number is prime or not
const prime = (num) => {
  const arr = [];
  for (let i = 0; i <= num; i += 1) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  if (arr.length === 2) {
    return 'yes';
  }
  return 'no';
};

const gamePrime = () => {
  // Greetings
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  // Gamerule
  console.log('"yes" if given number is prime. Otherwise answer "no"');
  // Numbers will be in range from 1 to 1100
  let number = Math.floor((Math.random() + 0.1) * 1000);
  let clientAnswer;
  let ans;
  // Showing the number to the player
  console.log(`Question: ${number}`);
  // Checking whether the number is prime or not
  ans = prime(number);
  // Taking answer from the player
  clientAnswer = readlineSync.question(`Your answer: `);
  if (clientAnswer === ans) {
    console.log('Correct!');
  } else {
    return console.log(`${clientAnswer} is wrong answer ;(. Correct answer was ${ans}.
        Let's try again, ${userName}!`);
  }
  // Commencement of the second round
  number = Math.floor((Math.random() + 0.1) * 1000);
  console.log(`Question: ${number}`);
  ans = prime(number);
  clientAnswer = readlineSync.question(`Your answer: `);
  if (clientAnswer === ans) {
    console.log('Correct!');
  } else {
    return console.log(`${clientAnswer} is wrong answer ;(. Correct answer was ${ans}.
      Let's try again, ${userName}!`);
  }
  number = Math.floor((Math.random() + 0.1) * 1000);
  console.log(`Question: ${number}`);
  ans = prime(number);
  clientAnswer = readlineSync.question(`Your answer: `);
  if (clientAnswer === ans) {
    console.log('Correct!');
  } else {
    return console.log(`${clientAnswer} is wrong answer ;(. Correct answer was ${ans}.
      Let's try again, ${userName}!`);
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gamePrime;
