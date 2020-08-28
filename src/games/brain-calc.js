import { generateRandomNumber } from '../util.js';
import { createGamePlay } from '../index.js';

const title = 'What is the result of the expression?';

const makeQuestionWithAnswer = (maxNumber) => {
  const firstNumber = generateRandomNumber(maxNumber);
  const secondNumber = generateRandomNumber(maxNumber);
  const operationCode = generateRandomNumber(3);
  let operation;
  let answer;
  switch (operationCode) {
    case 0:
      operation = '+';
      answer = firstNumber + secondNumber;
      break;
    case 1:
      operation = '-';
      answer = firstNumber - secondNumber;
      break;
    case 2:
      operation = '*';
      answer = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  return { question, answer: String(answer) };
};

export default () => createGamePlay(title, makeQuestionWithAnswer);
