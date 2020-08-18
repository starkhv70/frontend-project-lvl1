import readlineSync from 'readline-sync';

const greetingUser = () => {
  const userName = readlineSync.question('May I have your name? ', { limit: /\p{L}/gu });
  console.log(`Hello, ${userName}!`);
  return userName;
};

const generateNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = (num) => num % 2 === 0;

const isBoolean = (val) => typeof (val) === 'boolean';

const convertYNAnswer = (answer) => {
  if (isBoolean(answer)) {
    return (answer === true) ? 'yes' : 'no';
  }
  return answer;
};
const playGame = (numOfTries = 3, maxNum = 200) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < numOfTries; i += 1) {
    const randomNum = generateNumber(maxNum);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer:',
      { trueValue: ['yes'], falseValue: ['no'] });
    if (isEven(randomNum) !== answer) {
      console.log(`"${convertYNAnswer(answer)}" is wrong answer ;(. Correct answer was "${isEven(randomNum) ? 'yes' : 'no'}".`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

export {
  greetingUser,
  playGame,
};
