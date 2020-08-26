import generateRandomNumber from '../util.js';
import createGamePlay from '../index.js';

const title = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};

const makeQuestionWithAnswer = (maxNumber) => {
  const firstNum = generateRandomNumber(maxNumber);
  const secondNum = generateRandomNumber(maxNumber);
  const question = `${firstNum} ${secondNum}`;
  const answer = gcd(firstNum, secondNum);
  return { question, answer: String(answer) };
};

export default () => createGamePlay(title, makeQuestionWithAnswer);
