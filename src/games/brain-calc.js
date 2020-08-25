import generateRandomNumber from '../util.js';
import gameEngine from '../index.js';

const greeting = 'What is the result of the expression?';

const makeQuestion = (maxNumber = 200) => {
  const firstNum = generateRandomNumber(maxNumber);
  const secondNum = generateRandomNumber(maxNumber);
  const operationCode = generateRandomNumber(3);
  let operation;
  let answer;
  switch (operationCode) {
    case 0:
      operation = '+';
      answer = firstNum + secondNum;
      break;
    case 1:
      operation = '-';
      answer = firstNum - secondNum;
      break;
    case 2:
      operation = '*';
      answer = firstNum * secondNum;
      break;
    default:
      break;
  }
  const question = [firstNum, operation, secondNum].join(' ');
  return { question, answer: String(answer) };
};

export default () => gameEngine(greeting, makeQuestion);
