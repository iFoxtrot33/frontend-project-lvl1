import {
  wrongAnswer,
} from '../helpers.js';

const startRound = (clientAnswer, name, ans) => {
  if ((clientAnswer) === (ans)) {
    return 'Correct!';
  }
  return wrongAnswer(clientAnswer, name, ans);
};

export default startRound;
