import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (num2 === 0 ? num1 : getGcd(num2, num1 % num2));

const getCorrectResult = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 50);
  const question = `${num1} ${num2}`;
  const correctGcd = getGcd(num1, num2);
  const correctAnswer = String(correctGcd);
  return [question, correctAnswer];
};
const playGame = () => {
  startGame(gameDescription, getCorrectResult);
};
export default playGame;
