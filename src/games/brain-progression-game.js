import generateRandomNumber from '../randomNumber.js';
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
  const firstNumber = generateRandomNumber(1, 20);
  const diffProgression = generateRandomNumber(2, 7);
  const progressionLength = generateRandomNumber(5, 15);

  const mathProgression = createProgression(firstNumber, diffProgression, progressionLength);
  const randomIndex = generateRandomNumber(0, mathProgression.length - 1);
  const answer = String(mathProgression[randomIndex]);

  mathProgression[randomIndex] = '..';
  const question = mathProgression.join(' ');

  return [question, answer];
};
export default () => startGame(gameDescription, getGameData);
