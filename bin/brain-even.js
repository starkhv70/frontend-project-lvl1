#!/usr/bin/env node
import { greetingUser, playGame } from '../src/util.js';

console.log('Welcome to the Brain Games!');
const userName = greetingUser();

const isSuccess = playGame();

if (isSuccess) {
  console.log(`Congratulations, ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}!`);
}
