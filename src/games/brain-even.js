import generateNumber from '../util.js';

const isEven = (num) => num % 2 === 0;

const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeQuestion = (maxNumber = 200) => {
  const question = generateNumber(maxNumber);
  const answer = (isEven(question)) ? 'yes' : 'no';
  return { question, answer };
};

export { makeQuestion, greeting };
