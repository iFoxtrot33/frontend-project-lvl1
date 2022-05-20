import {
  makeRandom, runGreetings, runVictory,
} from '../../helpers.js';
import startGame from '../game-engine.js';

const runBrainEven = () => {
  let expectedAnswer;
  const userName = (runGreetings());
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const first = makeRandom(100);
    const isEven = (number) => number % 2 === 0;
    expectedAnswer = isEven(first) ? 'yes' : 'no';
    const result = startGame(first, expectedAnswer, userName);
    if (result === 0) {
      break;
    }
    if (i === 2) {
      runVictory(userName);
    }
  }
};

export default runBrainEven;
