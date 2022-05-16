import {
  runWrongAnswer, askGameQuestion, askAnswer, runVictory, runGreetings,
} from '../helpers.js';

const startGame = (first, second, third, ans1, ans2, ans3, gameRule) => {
  const userName = (runGreetings());
  console.log(gameRule);
  console.log(askGameQuestion(first));
  let clientAnswer = askAnswer();
  if ((clientAnswer) === (ans1)) {
    console.log('Correct!');
  } else {
    return runWrongAnswer(clientAnswer, userName, ans1);
  }
  console.log(askGameQuestion(second));
  clientAnswer = askAnswer();
  if ((clientAnswer) === (ans2)) {
    console.log('Correct!');
  } else {
    return runWrongAnswer(clientAnswer, userName, ans2);
  }
  console.log(askGameQuestion(third));
  clientAnswer = askAnswer();
  if ((clientAnswer) === (ans3)) {
    console.log('Correct!');
  } else {
    return runWrongAnswer(clientAnswer, userName, ans3);
  }
  return runVictory(userName);
};

export default startGame;
