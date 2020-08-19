import generateNumber from '../util.js';

const greeting = 'What is the result of the expression?';

const makeQuestion = (maxNumber = 200) => {
  const firstNum = generateNumber(maxNumber);
  const secondNum = generateNumber(maxNumber);
  const operationCode = generateNumber(3);
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

export { makeQuestion, greeting };
