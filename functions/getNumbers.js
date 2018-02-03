const getNumbersArray = () => {
  return [1, 3, 2];
};

export default (fetchNumbers) => {
  const getNumbers = fetchNumbers || getNumbersArray;
  const numbers = getNumbers();

  if(!Array.isArray(numbers)) {
    throw new Error('it\'s not array');  
  }

  return numbers;
}