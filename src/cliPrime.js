import {
  greetings, gameQuestion, answer, victory, makeRandomNoZero,
} from '../helpers.js';

import startRound from './game-engine.js';

const isPrime = (num) => {
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

const runGamePrime = () => {
  const name = (greetings());
  console.log('"yes" if given number is prime. Otherwise answer "no"');
  let number = makeRandomNoZero(1000);
  let clientAnswer;
  let ans;
  let temp;
  console.log(gameQuestion(`${number}`));
  ans = isPrime(number);
  clientAnswer = answer();
  temp = startRound(clientAnswer, name, ans);
  if (temp.length === 8) {
    console.log(temp);
  } else {
    return temp;
  }
  number = makeRandomNoZero(100);
  console.log(gameQuestion(`${number}`));
  ans = isPrime(number);
  clientAnswer = answer();
  temp = startRound(clientAnswer, name, ans);
  if (temp.length === 8) {
    console.log(temp);
  } else {
    return temp;
  }
  number = makeRandomNoZero(1000);
  console.log(gameQuestion(`${number}`));
  ans = isPrime(number);
  clientAnswer = answer();
  temp = startRound(clientAnswer, name, ans);
  if (temp.length === 8) {
    console.log(temp);
  } else {
    return temp;
  }
  return victory(name);
};

export default runGamePrime;
