import {
  runWrongAnswer, askGameQuestion, askAnswer, runGreetings, runVictory,
} from '../helpers.js';

const startGame = (askOne, askTwo, askThree, ansOne, ansTwo, ansThree, gamerule) => {
  const arrAsk = [askOne, askTwo, askThree];
  const arrAns = [ansOne, ansTwo, ansThree];
  let clientAnswer;
  const userName = (runGreetings());
  console.log(gamerule);
  for (let i = 0; i < arrAsk.length; i += 1) {
    askGameQuestion(arrAsk[i]);
    clientAnswer = askAnswer();
    if ((clientAnswer) === (arrAns[i])) {
      console.log('Correct!');
    } else {
      runWrongAnswer(clientAnswer, userName, arrAns[i]);
      break;
    }
    if (i === 2) {
      runVictory(userName);
    }
  }
};

export default startGame;
