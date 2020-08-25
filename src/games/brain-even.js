import generateRandomNumber from '../util.js';
import gameEngine from '../index.js';

const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const makeQuestion = (maxNumber = 200) => {
  const question = generateRandomNumber(maxNumber);
  const answer = (isEven(question)) ? 'yes' : 'no';
  return { question, answer };
};

export default () => gameEngine(greeting, makeQuestion);
