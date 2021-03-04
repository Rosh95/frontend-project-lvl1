// eslint-disable-next-line max-len
const getRandomNumber = (minValue = 1, maxValue = 100) => Math.floor(Math.random() * (maxValue - minValue)) + minValue;
export default getRandomNumber;
