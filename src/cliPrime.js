import {
  greetings, gameQuestion, answer, wrongAnswer, victory,
} from './gameEngine.js';

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
  const name = (greetings());
  // Gamerule
  console.log('"yes" if given number is prime. Otherwise answer "no"');
  // Numbers will be in range from 1 to 1100
  let number = Math.floor((Math.random() + 0.1) * 1000);
  let clientAnswer;
  let ans;
  // Showing the number to the player
  console.log(gameQuestion(`${number}`));
  // Checking whether the number is prime or not
  ans = prime(number);
  // Taking answer from the player
  clientAnswer = answer();
  if (clientAnswer === ans) {
    console.log('Correct!');
  } else {
    return wrongAnswer(clientAnswer, name, ans);
  }
  // Commencement of the second round
  number = Math.floor((Math.random() + 0.1) * 1000);
  console.log(gameQuestion(`${number}`));
  ans = prime(number);
  clientAnswer = answer();
  if (clientAnswer === ans) {
    console.log('Correct!');
  } else {
    return wrongAnswer(clientAnswer, name, ans);
  }
  number = Math.floor((Math.random() + 0.1) * 1000);
  console.log(gameQuestion(`${number}`));
  ans = prime(number);
  clientAnswer = answer();
  if (clientAnswer === ans) {
    console.log('Correct!');
  } else {
    return wrongAnswer(clientAnswer, name, ans);
  }
  return victory(name);
};

export default gamePrime;
