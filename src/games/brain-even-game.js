import generateRandomNumber from '../randomNumber.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = generateRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
export default () => startGame(gameDescription, getGameData);
