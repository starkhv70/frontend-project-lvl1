/* eslint-disable import/prefer-default-export */

import readlineSync from 'readline-sync';

const maxRandomNumber = 200;

const createGamePlay = (title, makeQuestionWithAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ', { limit: /\p{L}/gu });
  console.log(`Hello, ${userName}!`);
  console.log(title);
  const numOfTries = 3;
  for (let i = 0; i < numOfTries; i += 1) {
    const { question, answer } = makeQuestionWithAnswer(maxRandomNumber);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export { createGamePlay };
