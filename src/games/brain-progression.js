import generateRandomNumber from '../util.js';
import createGamePlay from '../index.js';

const title = 'What number is missing in the progression?';

const generateProgression = (firstMember, step, length) => {
  const progression = [];
  for (let index = 0; index < length; index += 1) {
    progression.push(firstMember + index * step);
  }
  return progression;
};

const makeQuestionWithAnswer = (maxNumber) => {
  const firstMember = generateRandomNumber(maxNumber);
  const step = generateRandomNumber(10);
  const progressionLength = 10;
  const progression = generateProgression(firstMember, step, progressionLength);
  const randomIndex = generateRandomNumber(progressionLength);
  const answer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return { question, answer: String(answer) };
};

export default () => createGamePlay(title, makeQuestionWithAnswer);
