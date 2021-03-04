import getRandomNumber from '../randomNumber.js';
import startGame from '../even.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const playStartGame = () => {
  startGame(gameDescription, getGameData);
};
export default playStartGame;