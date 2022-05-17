import {
  runWrongAnswer, askGameQuestion, askAnswer, runVictory, runGreetings,
} from '../helpers.js';

const startGame = (first, second, third, ans1, ans2, ans3, gameRule) => {
  const userName = (runGreetings());
  console.log(gameRule);
  askGameQuestion(first);
  let clientAnswer = askAnswer();
  for (let i = 0; i < 3;) {
    if ((clientAnswer) === (ans1)) {
      console.log('Correct!');
      i += 1;
    } else {
      runWrongAnswer(clientAnswer, userName, ans1);
      break;
    }
    askGameQuestion(second);
    clientAnswer = askAnswer();
    if ((clientAnswer) === (ans2)) {
      console.log('Correct!');
      i += 1;
    } else {
      runWrongAnswer(clientAnswer, userName, ans2);
      break;
    }
    askGameQuestion(third);
    clientAnswer = askAnswer();
    if ((clientAnswer) === (ans3)) {
      console.log('Correct!');
      i += 1;
      runVictory(userName);
    } else {
      runWrongAnswer(clientAnswer, userName, ans3);
      break;
    }
  }
};

export default startGame;
