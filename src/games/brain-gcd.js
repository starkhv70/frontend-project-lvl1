import { generateNumber, gcd } from '../util.js';

const greeting = 'Find the greatest common divisor of given numbers.';

const makeQuestion = (maxNumber = 200) => {
  const firstNum = generateNumber(maxNumber);
  const secondNum = generateNumber(maxNumber);
  const question = [firstNum, secondNum].join(' ');
  const answer = gcd(firstNum, secondNum);
  return { question, answer: String(answer) };
};

export { makeQuestion, greeting };
