/* eslint-disable import/prefer-default-export */
const generateRandomNumber = (min, max) => {
  const randomNumber = min + Math.floor(Math.random() * Math.floor(max - min));
  return randomNumber;
};

export { generateRandomNumber };
