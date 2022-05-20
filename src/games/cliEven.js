import {
  getRandomNumber,
} from '../helpers.js';
import startGame from '../game-engine.js';

const runBrainEven = () => {
  const number = [];
  const expectedAnswer = [];
  const gamerule = 'Answer "yes" if the number is even, otherwise answer "no".';
  for (let i = 0; i < 3; i += 1) {
    const first = getRandomNumber(1, 100);
    const isEven = (num) => num % 2 === 0;
    number.push(first);
    expectedAnswer.push(isEven(first) ? 'yes' : 'no');
  }
  startGame(
    number[0],
    number[1],
    number[2],
    expectedAnswer[0],
    expectedAnswer[1],
    expectedAnswer[2],
    gamerule,
  );
};

export default runBrainEven;
