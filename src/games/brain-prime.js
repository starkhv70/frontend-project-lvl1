import { generateRandomNumber } from '../util.js';
import { RunGame, gameRounds } from '../index.js';

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const makeQuestionWithAnswer = (minNumber, maxNumber) => {
  const question = generateRandomNumber(minNumber, maxNumber);
  const answer = (isPrime(question)) ? 'yes' : 'no';
  return { question, answer: String(answer) };
};

export default () => RunGame(title, makeQuestionWithAnswer, gameRounds);
