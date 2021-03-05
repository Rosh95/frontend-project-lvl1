import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isEven = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const playStartGame = () => {
  startGame(gameDescription, getGameData);
};
export default playStartGame;
