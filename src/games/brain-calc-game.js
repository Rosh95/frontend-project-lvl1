import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const getExpressionResult = (operation, num1, num2) => {
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
  const num1 = getRandomNumber(1, 30);
  const num2 = getRandomNumber(1, 30);
  const randomOperation = operations[getRandomNumber(0, operations.length)];
  const question = `${num1} ${randomOperation} ${num2}`;
  const answer = String(getExpressionResult(randomOperation, num1, num2));
  return [question, answer];
};
export default () => startGame(gameDescription, getGameData);
