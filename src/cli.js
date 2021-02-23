import readlineSync from 'readline-sync';

const hello = () => {
  const name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}`;
};
// eslint-disable-next-line import/prefer-default-export
export { hello };
