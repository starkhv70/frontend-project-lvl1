/* eslint-disable import/prefer-default-export */

import readlineSync from 'readline-sync';

const minRandomNumber = 0;
const maxRandomNumber = 200;
const gameRounds = 3;

const RunGame = (title, makeQuestionWithAnswer, numOfRounds) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ', { limit: /\p{L}/gu });
  console.log(`Hello, ${userName}!`);
  console.log(title);
  for (let i = 0; i < numOfRounds; i += 1) {
    const { question, answer } = makeQuestionWithAnswer(minRandomNumber, maxRandomNumber);
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

export { RunGame, gameRounds };
