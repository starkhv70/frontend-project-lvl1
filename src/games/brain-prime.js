import { generateNumber, isPrime } from '../util.js';

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeQuestion = (maxNumber = 200) => {
  const question = generateNumber(maxNumber);
  const answer = (isPrime(question)) ? 'yes' : 'no';
  return { question, answer: String(answer) };
};

export { makeQuestion, greeting };
