const generateNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = (num) => num % 2 === 0;

const isBoolean = (val) => typeof (val) === 'boolean';

const convertYNAnswer = (answer) => {
  if (isBoolean(answer)) {
    return (answer === true) ? 'yes' : 'no';
  }
  return answer;
};

export {
  generateNumber,
  isEven,
  isBoolean,
  convertYNAnswer,
};
