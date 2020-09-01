import { generateRandomNumber } from '../util.js';
import { RunGame, gameRounds } from '../index.js';

const title = 'What is the result of the expression?';

const makeQuestionWithAnswer = (minNumber, maxNumber) => {
  const firstNumber = generateRandomNumber(minNumber, maxNumber);
  const secondNumber = generateRandomNumber(minNumber, maxNumber);
  const operations = ['+', '-', '*'];
  const randomIndex = generateRandomNumber(0, operations.length);
  let answer;
  switch (operations[randomIndex]) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    default:
      throw new Error(`Unknown operation: '${operations[randomIndex]}'!`);
  }
  const question = `${firstNumber} ${operations[randomIndex]} ${secondNumber}`;
  return { question, answer: String(answer) };
};

export default () => RunGame(title, makeQuestionWithAnswer, gameRounds);
