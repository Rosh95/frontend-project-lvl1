import readlineSync from 'readline-sync';

const counts = 3;

const startGame = (gameDescription, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(gameDescription);

  for (let i = 0; i < counts; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${answer} is wrong answer ;(. Correct answer was '${correctAnswer}' ./n Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default startGame;
