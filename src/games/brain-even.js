import { generateRandomNumber } from '../util.js';
import { runGame } from '../index.js';

const title = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const makeQuestionWithAnswer = (minNumber, maxNumber) => {
  const question = generateRandomNumber(minNumber, maxNumber);
  const answer = (isEven(question)) ? 'yes' : 'no';
  return { question, answer };
};

export default () => runGame(title, makeQuestionWithAnswer);
