import {
  runWrongAnswer, askGameQuestion, askAnswer,
} from '../helpers.js';

const startGame = (first, ans, userName) => {
  askGameQuestion(first);
  const clientAnswer = askAnswer();
  if ((clientAnswer) === (ans)) {
    console.log('Correct!');
    return 1;
  }
  runWrongAnswer(clientAnswer, userName, ans);
  return 0;
};

export default startGame;
