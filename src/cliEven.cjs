
 /*const evenGame = () => {
 console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const firstNumber = Math.floor(Math.random() * 101);
  const secondNumber = Math.floor(Math.random() * 101);
  const thirdNumber = Math.floor(Math.random() * 101);
  prompt.start();
  console.log(`Question: ${firstNumber}`);
  prompt.get(cliantAnswer);
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
  console.log(secondNumber);
  clientAnswer = prompt('Question:');
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
  console.log(thirdNumber);
  clientAnswer = prompt('Question:');
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
  return console.log(`Congratulations, ${userName}`);
};

export default evenGame(); */


"use strict";
const ps = require('promt-sync');
const prompt = ps();
let name =prompt('enter your name :');
console.log(`Hi ${name}`);


export default prompt; 

