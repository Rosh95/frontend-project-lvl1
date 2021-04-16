import generateRandomNumber from '../randomNumber.js';
import startGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (num2 === 0 ? num1 : getGcd(num2, num1 % num2));

const getGameData = () => {
  const num1 = generateRandomNumber(1, 100);
  const num2 = generateRandomNumber(1, 50);
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return [question, answer];
};
export default () => startGame(gameDescription, getGameData);
