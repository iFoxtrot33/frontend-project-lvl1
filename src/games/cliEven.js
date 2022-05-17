import {
  makeRandom,
} from '../../helpers.js';
import startGame from '../game-engine.js';

const runBrainEven = () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const first = makeRandom(100);
  const second = makeRandom(100);
  const third = makeRandom(100);
  let ans1;
  let ans2;
  let ans3;
  if ((first % 2) === 0) {
    ans1 = 'yes';
  } else {
    ans1 = 'no';
  }
  if ((second % 2) === 0) {
    ans2 = 'yes';
  } else {
    ans2 = 'no';
  }
  if ((third % 2) === 0) {
    ans3 = 'yes';
  } else {
    ans3 = 'no';
  }
  return startGame(first, second, third, ans1, ans2, ans3, gameRule);
};

export default runBrainEven;
