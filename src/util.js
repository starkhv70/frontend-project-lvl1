const generateNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = (num) => num % 2 === 0;

const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};

const generateProgression = (firstMember, step, length = 10) => {
  const progression = [];
  for (let index = 0; index < length; index += 1) {
    progression.push(firstMember + index * step);
  }
  return progression;
};

export {
  generateNumber, generateProgression, gcd, isEven,
};
