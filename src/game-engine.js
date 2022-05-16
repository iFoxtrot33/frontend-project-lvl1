import {
  wrongAnswer, gameQuestion, answer, victory, runGreetings,
} from '../helpers.js';

const startGame = (first, second, third, ans1, ans2, ans3, gameRule) => {
  const userName = (runGreetings());
  console.log(gameRule);
  console.log(gameQuestion(first));
  let clientAnswer = answer();
  if ((clientAnswer) === (ans1)) {
    console.log('Correct!');
  } else {
    return wrongAnswer(clientAnswer, userName, ans1);
  }
  console.log(gameQuestion(second));
  clientAnswer = answer();
  if ((clientAnswer) === (ans2)) {
    console.log('Correct!');
  } else {
    return wrongAnswer(clientAnswer, userName, ans2);
  }
  console.log(gameQuestion(third));
  clientAnswer = answer();
  if ((clientAnswer) === (ans3)) {
    console.log('Correct!');
  } else {
    return wrongAnswer(clientAnswer, userName, ans3);
  }
  return victory(userName);
};

export default startGame;
