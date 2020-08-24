import generateRandomNumber from '../util.js';

const greeting = 'What number is missing in the progression?';

const generateProgression = (firstMember, step, length = 10) => {
  const progression = [];
  for (let index = 0; index < length; index += 1) {
    progression.push(firstMember + index * step);
  }
  return progression;
};

const makeQuestion = (maxNumber = 200, progressionLength = 10) => {
  const firstMember = generateRandomNumber(maxNumber);
  const step = generateRandomNumber(10);
  const progression = generateProgression(firstMember, step, progressionLength);
  const randomIndex = generateRandomNumber(progressionLength);
  const answer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return { question, answer: String(answer) };
};

export { makeQuestion, greeting };
