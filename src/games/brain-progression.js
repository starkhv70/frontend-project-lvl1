import { generateRandomNumber } from '../util.js';
import { runGame } from '../index.js';

const title = 'What number is missing in the progression?';
const progressionLength = 10;
const maxStep = 10;

const generateProgression = (firstMember, step, length) => {
  const progression = [];
  for (let index = 0; index < length; index += 1) {
    progression.push(firstMember + index * step);
  }
  return progression;
};

const makeQuestionWithAnswer = (minNumber, maxNumber) => {
  const firstMember = generateRandomNumber(minNumber, maxNumber);
  const step = generateRandomNumber(0, maxStep);
  const progression = generateProgression(firstMember, step, progressionLength);
  const randomIndex = generateRandomNumber(0, progressionLength);
  const answer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return { question, answer: String(answer) };
};

export default () => runGame(title, makeQuestionWithAnswer);
