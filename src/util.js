const generateNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = (num) => num % 2 === 0;

const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};

export { generateNumber, gcd, isEven };
