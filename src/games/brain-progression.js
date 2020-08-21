import { generateNumber, generateProgression } from '../util.js';

const greeting = 'What number is missing in the progression?';

const makeQuestion = (maxNumber = 200, progressionLength = 10) => {
  const firstMember = generateNumber(maxNumber);
  const step = generateNumber(10);
  const progression = generateProgression(firstMember, step, progressionLength);
  const randomIndex = generateNumber(progressionLength);
  const answer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return { question, answer: String(answer) };
};

export { makeQuestion, greeting };
