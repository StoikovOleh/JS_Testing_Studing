import getNumbers from '../functions/getNumbers';
import assert from 'assert';

describe('getNumbers', () => {
  it('should return error if result is\'t array', () => {
    const fetchNumbers = () => 'not array';

    assert.throws(() => {
      getNumbers(fetchNumbers);  
    }, /it\'s not array/);
  });

  it('should return array with 3 values', () => {
    const numbers = getNumbers();

    assert(Array.isArray(numbers), 'returned not array');
    assert.equal(numbers.length, 3, `array returned ${numbers.length} instead of the 3 values`);
  });
});
