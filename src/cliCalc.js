import readlineSync from 'readline-sync';

const calcGame = () => {
  // First number with the range from 0 to 100
  let firstNumber = Math.floor(Math.random() * 101);
  // Second number with the range from 0 to 100
  let secondNumber = Math.floor(Math.random() * 101);
  // Range for math sign from 0 to 2 (+-*)
  let sign = Math.floor(Math.random() * 3);
  // For users input
  let ans = 0;
  // Greetings
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  // Chosing the sign of expression and taking user's answer
  if (sign === 0) {
    console.log(`Question: ${firstNumber} + ${secondNumber}`);
    ans = readlineSync.question(`Your answer:`);
  } else if (sign === 1) {
    console.log(`Question: ${firstNumber} - ${secondNumber}`);
    ans = readlineSync.question(`Your answer:`);
  } else if (sign === 2) {
    console.log(`Question: ${firstNumber} * ${secondNumber}`);
    ans = readlineSync.question(`Your answer:`);
  }
  ans *= 1;
  // Deciding whether user's answer is correct or not
  if ((sign === 0) && ((firstNumber + secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 0) && ((firstNumber + secondNumber) !== ans)) {
    return console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber * secondNumber}.
    Let's try again,${userName}!`);
  }
  if ((sign === 1) && ((firstNumber - secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 1) && ((firstNumber - secondNumber) !== ans)) {
    return console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber - secondNumber}.
        Let's try again,${userName}!`);
  }
  if ((sign === 2) && ((firstNumber * secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 2) && ((firstNumber * secondNumber) !== ans)) {
    return console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber * secondNumber}.
        Let's try again,${userName}!`);
  }
  // First round completed. In case if the user is corret we continue the game
  // Commence of the second round
  firstNumber = Math.floor(Math.random() * 101);
  secondNumber = Math.floor(Math.random() * 101);
  sign = Math.floor(Math.random() * 3);

  if (sign === 0) {
    console.log(`Question: ${firstNumber} + ${secondNumber}`);
    ans = readlineSync.question(`Your answer:`);
  } else if (sign === 1) {
    console.log(`Question: ${firstNumber} - ${secondNumber}`);
    ans = readlineSync.question(`Your answer:`);
  } else if (sign === 2) {
    console.log(`Question: ${firstNumber} * ${secondNumber}`);
    ans = readlineSync.question(`Your answer:`);
  }
  ans *= 1;
  if ((sign === 0) && ((firstNumber + secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 0) && ((firstNumber + secondNumber) !== ans)) {
    console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber * secondNumber}`);
    console.log(`Let's try again, ${userName}!`);
    return;
  }
  if ((sign === 1) && ((firstNumber - secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 1) && ((firstNumber - secondNumber) !== ans)) {
    console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber - secondNumber}`);
    console.log(`Let's try again, ${userName}!`);
    return;
  }
  if ((sign === 2) && ((firstNumber * secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 2) && ((firstNumber * secondNumber) !== ans)) {
    console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber * secondNumber}`);
    console.log(`Let's try again, ${userName}!`);
    return;
  }
  // Commence of the third round
  firstNumber = Math.floor(Math.random() * 101);
  secondNumber = Math.floor(Math.random() * 101);
  sign = Math.floor(Math.random() * 3);

  if (sign === 0) {
    console.log(`Question: ${firstNumber} + ${secondNumber}`);
    ans = readlineSync.question(`Your answer:`);
  } else if (sign === 1) {
    console.log(`Question: ${firstNumber} - ${secondNumber}`);
    ans = readlineSync.question(`Your answer:`);
  } else if (sign === 2) {
    console.log(`Question: ${firstNumber} * ${secondNumber}`);
    ans = readlineSync.question(`Your answer:`);
  }
  ans *= 1;
  if ((sign === 0) && ((firstNumber + secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 0) && ((firstNumber + secondNumber) !== ans)) {
    return console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber * secondNumber}.
    Let's try again,${userName}!`);
  }
  if ((sign === 1) && ((firstNumber - secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 1) && ((firstNumber - secondNumber) !== ans)) {
    return console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber - secondNumber}.
        Let's try again,${userName}!`);
  }
  if ((sign === 2) && ((firstNumber * secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 2) && ((firstNumber * secondNumber) !== ans)) {
    return console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber * secondNumber}.
        Let's try again,${userName}!`);
  }
  // Final words in case of victory
  return console.log(`Congratulations, ${userName}! `);
};

export default calcGame;
