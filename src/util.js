import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ', {
    limit: /\p{L}/gu,
  });
  return userName;
};

const generateNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = (num) => num % 2 === 0;

export { getUserName, generateNumber, isEven };
