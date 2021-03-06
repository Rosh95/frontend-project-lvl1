import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const createProgression = (firstNumber, diffProgression, progressionLength) => {
  const progression = [];
  for (let i = firstNumber; progression.length < progressionLength; i += diffProgression) {
    progression.push(i);
  }
  return progression;
};
const createProgressionWithEmptyNumber = () => {
  const firstNumber = getRandomNumber(1, 20);
  const diffProgression = getRandomNumber(2, 7);
  const progressionLength = getRandomNumber(5, 15);

  let mathProgression = createProgression(firstNumber, diffProgression, progressionLength);
  const randomIndex = getRandomNumber(0, mathProgression.length - 1);
  const emptyNumber = mathProgression[randomIndex];
  const correctAnswer = String(emptyNumber);

  mathProgression[randomIndex] = '..';
  mathProgression = mathProgression.join(' ');

  return [mathProgression, correctAnswer];
};
const playGame = () => {
  startGame(gameDescription, createProgressionWithEmptyNumber);
};
export default playGame;
