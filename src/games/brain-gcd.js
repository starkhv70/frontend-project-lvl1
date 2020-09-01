import { generateRandomNumber } from '../util.js';
import { RunGame, gameRounds } from '../index.js';

const title = 'Find the greatest common divisor of given numbers.';

const gcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return Math.abs(firstNumber);
  }
  return gcd(secondNumber, firstNumber % secondNumber);
};

const makeQuestionWithAnswer = (minNumber, maxNumber) => {
  const firstNumber = generateRandomNumber(minNumber, maxNumber);
  const secondNumber = generateRandomNumber(minNumber, maxNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = gcd(firstNumber, secondNumber);
  return { question, answer: String(answer) };
};

export default () => RunGame(title, makeQuestionWithAnswer, gameRounds);
