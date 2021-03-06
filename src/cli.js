/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}`;
};
export { greetUser };
