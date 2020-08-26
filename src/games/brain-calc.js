import generateRandomNumber from '../util.js';
import createGamePlay from '../index.js';

const title = 'What is the result of the expression?';

const makeQuestionWithAnswer = (maxNumber) => {
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
  const question = `${firstNum} ${operation} ${secondNum}`;
  return { question, answer: String(answer) };
};

export default () => createGamePlay(title, makeQuestionWithAnswer);
