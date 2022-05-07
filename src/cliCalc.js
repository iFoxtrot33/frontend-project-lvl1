import readlineSync from 'readline-sync';

const calcGame = () => {
  let firstNumber = Math.floor(Math.random() * 101);                           // First number with the range from 0 to 100
  let secondNumber = Math.floor(Math.random() * 101);                         // Second number with the range from 0 to 100
  let sign = Math.floor(Math.random() * 3);                                   // Range for math sign from 0 to 2 (+-*)
  let ans = 0;                                                               // For users input 
  console.log('Welcome to the Brain Games!');                                 //Greetings
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`); 
  if (sign === 0) {                                                           //Chosing the sign of expression and taking user's answer
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
  if ((sign === 0) && ((firstNumber + secondNumber) === ans)) {                             //Deciding whether user's answer is correct or not
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
  }                                                                                      // First round completed. In case if the user is corret we continue the game
  firstNumber = Math.floor(Math.random() * 101);                                         // Commence of the second round. 
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
  firstNumber = Math.floor(Math.random() * 101);                                                        //Commence of the third round
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
  return console.log(`Congratulations, ${userName}! `);                                                // Final words in case of victory
};

export default calcGame;
