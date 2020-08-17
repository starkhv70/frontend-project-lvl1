#!/usr/bin/env node
import { getUserName, generateNumber } from '../src/util.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const numOfTries = 3;
const maxNum = 200;
for (let i = 0; i < numOfTries; i += 1) {
  const randomNum = generateNumber(maxNum);
  console.log(`Question: ${randomNum}`);
}
