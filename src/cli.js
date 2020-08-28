/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

const greetingUser = () => {
  const userName = readlineSync.question('May I have your name? ', { limit: /\p{L}/gu });
  console.log(`Hello, ${userName}!`);
};

export { greetingUser };
