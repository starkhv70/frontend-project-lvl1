#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { generateNumber, isEven, convertYNAnswer } from '../src/util.js';

const numOfTries = 3;
const maxNum = 200;

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ', { limit: /\p{L}/gu });
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let isSuccess = true;
for (let i = 0; i < numOfTries; i += 1) {
  const randomNum = generateNumber(maxNum);
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer:',
    { trueValue: ['yes'], falseValue: ['no'] });
  if (isEven(randomNum) !== answer) {
    isSuccess = false;
    console.log(`"${convertYNAnswer(answer)}" is wrong answer ;(. Correct answer was "${isEven(randomNum) ? 'yes' : 'no'}".`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
  console.log('Correct!');
}

if (isSuccess) {
  console.log(`Congratulations, ${userName}!`);
}
