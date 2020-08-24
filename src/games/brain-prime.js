import generateRandomNumber from '../util.js';

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const makeQuestion = (maxNumber = 200) => {
  const question = generateRandomNumber(maxNumber);
  const answer = (isPrime(question)) ? 'yes' : 'no';
  return { question, answer: String(answer) };
};

export { makeQuestion, greeting };
