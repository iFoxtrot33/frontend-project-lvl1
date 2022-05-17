import {
  makeRandom, runGreetings, runVictory,
} from '../../helpers.js';
import startGame from '../game-engine.js';

const runBrainEven = () => {
  let ans;
  const userName = (runGreetings());
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const first = makeRandom(100);
    if ((first % 2) === 0) {
      ans = 'yes';
    } else {
      ans = 'no';
    }
    const result = startGame(first, ans, userName);
    if (result === 0) {
      break;
    }
    if (i === 2) {
      runVictory(userName);
    }
  }
};

export default runBrainEven;
