import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const createProgression = (firstNumber, diffProgression, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + i * diffProgression);
  }
  return progression;
};
const getGameData = () => {
  const firstNumber = getRandomNumber(1, 20);
  const diffProgression = getRandomNumber(2, 7);
  const progressionLength = getRandomNumber(5, 15);

  const mathProgression = createProgression(firstNumber, diffProgression, progressionLength);
  const randomIndex = getRandomNumber(0, mathProgression.length - 1);
  const answer = String(mathProgression[randomIndex]);

  mathProgression[randomIndex] = '..';
  const question = mathProgression.join(' ');

  return [question, answer];
};
export default () => startGame(gameDescription, getGameData);
