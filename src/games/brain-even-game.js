import readlineSync from 'readline-sync';

const Hello = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  return `Hello, ${name}`;
};

const parity = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
// eslint-disable-next-line import/prefer-default-export
export { Hello };
