import readlineSync from 'readline-sync';

const calcGame = () => {
  let firstNumber = Math.floor(Math.random() * 101);
  let secondNumber = Math.floor(Math.random() * 101);
  let sign = Math.floor(Math.random() * 3);
  let ans = 0;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  if (sign === 0) {
    console.log(`Question:${firstNumber} + ${secondNumber} = `);
    ans = readlineSync.question(`Your answer:`);
  } else if (sign === 1) {
    console.log(`Question:${firstNumber} - ${secondNumber} = `);
    ans = readlineSync.question(`Your answer:`);
  } else if (sign === 2) {
    console.log(`Question:${firstNumber} * ${secondNumber} = `);
    ans = readlineSync.question(`Your answer:`);
  }
  ans *= 1;
  if ((sign === 0) && ((firstNumber + secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 0) && ((firstNumber + secondNumber) !== ans)) {
    return console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber * secondNumber}.
    Let's try again,${userName}`);
  }
  if ((sign === 1) && ((firstNumber - secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 1) && ((firstNumber - secondNumber) !== ans)) {
    return console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber - secondNumber}.
        Let's try again,${userName}`);
  }
  if ((sign === 2) && ((firstNumber * secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 2) && ((firstNumber * secondNumber) !== ans)) {
    return console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber * secondNumber}.
        Let's try again,${userName}`);
  }
  firstNumber = Math.floor(Math.random() * 101);
  secondNumber = Math.floor(Math.random() * 101);
  sign = Math.floor(Math.random() * 3);

  if (sign === 0) {
    console.log(`Question:${firstNumber} + ${secondNumber} = `);
    ans = readlineSync.question(`Your answer:`);
  } else if (sign === 1) {
    console.log(`Question:${firstNumber} - ${secondNumber} = `);
    ans = readlineSync.question(`Your answer:`);
  } else if (sign === 2) {
    console.log(`Question:${firstNumber} * ${secondNumber} = `);
    ans = readlineSync.question(`Your answer:`);
  }
  ans *= 1;
  if ((sign === 0) && ((firstNumber + secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 0) && ((firstNumber + secondNumber) !== ans)) {
    return console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber * secondNumber}.
    Let's try again,${userName}`);
  }
  if ((sign === 1) && ((firstNumber - secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 1) && ((firstNumber - secondNumber) !== ans)) {
    return console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber - secondNumber}.
        Let's try again,${userName}`);
  }
  if ((sign === 2) && ((firstNumber * secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 2) && ((firstNumber * secondNumber) !== ans)) {
    return console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber * secondNumber}.
        Let's try again,${userName}`);
  }
  firstNumber = Math.floor(Math.random() * 101);
  secondNumber = Math.floor(Math.random() * 101);
  sign = Math.floor(Math.random() * 3);

  if (sign === 0) {
    console.log(`Question:${firstNumber} + ${secondNumber} = `);
    ans = readlineSync.question(`Your answer:`);
  } else if (sign === 1) {
    console.log(`Question:${firstNumber} - ${secondNumber} = `);
    ans = readlineSync.question(`Your answer:`);
  } else if (sign === 2) {
    console.log(`Question:${firstNumber} * ${secondNumber} = `);
    ans = readlineSync.question(`Your answer:`);
  }
  ans *= 1;
  if ((sign === 0) && ((firstNumber + secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 0) && ((firstNumber + secondNumber) !== ans)) {
    return console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber * secondNumber}.
    Let's try again,${userName}`);
  }
  if ((sign === 1) && ((firstNumber - secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 1) && ((firstNumber - secondNumber) !== ans)) {
    return console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber - secondNumber}.
        Let's try again,${userName}`);
  }
  if ((sign === 2) && ((firstNumber * secondNumber) === ans)) {
    console.log('Correct!');
  } else if ((sign === 2) && ((firstNumber * secondNumber) !== ans)) {
    return console.log(`${ans} is wrong answer ;(. Correct answer was ${firstNumber * secondNumber}.
        Let's try again,${userName}`);
  }
  return console.log(`Congratulations, ${userName}! `);
};

export default calcGame;
