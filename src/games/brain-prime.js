import generateRandomNumber from '../util.js';
import createGamePlay from '../index.js';

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const makeQuestionWithAnswer = (maxNumber) => {
  const question = generateRandomNumber(maxNumber);
  const answer = (isPrime(question)) ? 'yes' : 'no';
  return { question, answer: String(answer) };
};

export default () => createGamePlay(title, makeQuestionWithAnswer);
