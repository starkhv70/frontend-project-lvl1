import generateRandomNumber from '../util.js';
import createGamePlay from '../index.js';

const title = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const makeQuestionWithAnswer = (maxNumber) => {
  const question = generateRandomNumber(maxNumber);
  const answer = (isEven(question)) ? 'yes' : 'no';
  return { question, answer };
};

export default () => createGamePlay(title, makeQuestionWithAnswer);
