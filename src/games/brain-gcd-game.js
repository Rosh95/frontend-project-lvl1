import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const getCorrectResult = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 50);
  const question = `${num1} ${num2}`;
  const correctGcd = getGcd(num1, num2);
  const correctAnswer = String(correctGcd);
  return [question, correctAnswer];
};
const playStartGame = () => {
  startGame(gameDescription, getCorrectResult);
};
export default playStartGame;
