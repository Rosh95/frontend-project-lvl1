import generateRandomNumber from '../randomNumber.js';
import startGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const calculateExpression = (operation, num1, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const getGameData = () => {
  const operations = ['+', '-', '*'];
  const num1 = generateRandomNumber(1, 30);
  const num2 = generateRandomNumber(1, 30);
  const generateRound = operations[generateRandomNumber(0, operations.length)];
  const question = `${num1} ${generateRound} ${num2}`;
  const answer = String(calculateExpression(generateRound, num1, num2));
  return [question, answer];
};
export default () => startGame(gameDescription, getGameData);
