import readlineSync from 'readline-sync';

export const greetingUser =() => {
    const userName = readlineSync.question('May I have your name? ', {limit: /\p{L}/gu});
    console.log(`Hello, ${userName}!`)
};
