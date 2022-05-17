import {
  makeRandom, runGreetings, runVictory,
} from '../../helpers.js';
import startGame from '../game-engine.js';

const runBrainEven = () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  let ans;
  let first;
  let result = 1;
  const userName = (runGreetings());
  console.log(gameRule);
  for (let i = 0; i < 3; i += 1) {
    first = makeRandom(100);
    if ((first % 2) === 0) {
      ans = 'yes';
    } else {
      ans = 'no';
    }
    result = startGame(first, ans, userName);
    if (result === 0) {
      break;
    }
    if (i === 2) {
      runVictory(userName);
    }
  }
};

export default runBrainEven;
