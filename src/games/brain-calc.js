import { generateRandomNumber } from '../util.js';
import { runGame } from '../index.js';

const title = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculateAnswer = (firstOperand, secondOperand, operation) => {
  switch (operation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

const makeQuestionWithAnswer = (minNumber, maxNumber) => {
  const firstNumber = generateRandomNumber(minNumber, maxNumber);
  const secondNumber = generateRandomNumber(minNumber, maxNumber);
  const randomIndex = generateRandomNumber(0, operations.length);
  const answer = calculateAnswer(firstNumber, secondNumber, operations[randomIndex]);
  const question = `${firstNumber} ${operations[randomIndex]} ${secondNumber}`;
  return { question, answer: String(answer) };
};

export default () => runGame(title, makeQuestionWithAnswer);
