import generateRandomNumber from '../util.js';

const greeting = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};

const makeQuestion = (maxNumber = 200) => {
  const firstNum = generateRandomNumber(maxNumber);
  const secondNum = generateRandomNumber(maxNumber);
  const question = [firstNum, secondNum].join(' ');
  const answer = gcd(firstNum, secondNum);
  return { question, answer: String(answer) };
};

export { makeQuestion, greeting };
