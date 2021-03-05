import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getCorrectResult = () => {
  let question = [];
  const firstNumber = getRandomNumber(1, 20);
  const addNumber = getRandomNumber(2, 7);
  const arrLength = getRandomNumber(5, 15);

  for (let i = firstNumber; question.length < arrLength; i += addNumber) {
    question.push(i);
  }
  const randomIndex = getRandomNumber(0, question.length - 1);
  const correctEmptyNumber = question[randomIndex];
  const correctAnswer = String(correctEmptyNumber);
  question[randomIndex] = '..';
  question = question.join(' ');
  return [question, correctAnswer];
};
const playStartGame = () => {
  startGame(gameDescription, getCorrectResult);
};
export default playStartGame;
