import generateRandomNumber from '../util.js';
import createGamePlay from '../index.js';

const title = 'Find the greatest common divisor of given numbers.';

const gcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return Math.abs(firstNumber);
  }
  return gcd(secondNumber, firstNumber % secondNumber);
};

const makeQuestionWithAnswer = (maxNumber) => {
  const firstNumber = generateRandomNumber(maxNumber);
  const secondNumber = generateRandomNumber(maxNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = gcd(firstNumber, secondNumber);
  return { question, answer: String(answer) };
};

export default () => createGamePlay(title, makeQuestionWithAnswer);
