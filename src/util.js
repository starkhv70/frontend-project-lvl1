import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ', {
    limit: /\p{L}/gu,
  });
  return userName;
};

const generateNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = (num) => num % 2 === 0;

const getYNAnswer = (query) => {
  const answer = readlineSync.question(query,
    { trueValue: ['yes'], falseValue: ['no'] });
  return (answer === true) ? 'yes' : 'no';
};

export {
  getUserName,
  generateNumber,
  isEven,
  getYNAnswer,
};
