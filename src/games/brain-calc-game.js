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

const getCorrectResult = () => {
  const operation = ['+', '-', '*'];
  const num1 = getRandomNumber(1, 30);
  const num2 = getRandomNumber(1, 30);
  const randomOperation = operation[getRandomNumber(0, operation.length)];
  const question = `${num1}${randomOperation}${num2}`;
  const correctExpression = getExpressionResult(randomOperation, num1, num2);
  const correctAnswer = String(correctExpression);
  return [question, correctAnswer];
};
const playStartGame = () => {
  startGame(gameDescription, getCorrectResult);
};
export default playStartGame;
