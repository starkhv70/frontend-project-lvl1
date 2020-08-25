import readlineSync from 'readline-sync';

const gameEngine = (gameCondition, questionFunc, numOfTries = 3) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ', { limit: /\p{L}/gu });
  console.log(`Hello, ${userName}!`);
  console.log(gameCondition);
  for (let i = 0; i < numOfTries; i += 1) {
    const { question, answer } = questionFunc();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default gameEngine;
