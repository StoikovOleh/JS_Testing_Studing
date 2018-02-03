import getColors from '../functions/getColors';
import assert from 'assert';
import fs from 'fs';

const colorsFile = process.cwd() + '/colors.json';

const rewriteColors = (newColors, callback) => {
  fs.writeFile(colorsFile, JSON.stringify(newColors), callback);
};

describe('getColors', () => {
  let colors = {};

  before(done => {
    fs.readFile(colorsFile, (err, contents) => {
      colors = JSON.parse(contents.toString());
      done();
    });
  });

  afterEach(done => {
    rewriteColors(colors, done);  
  });

  it('should throws error if result isn\'t array', done => {    
    rewriteColors({colors: 4}, (err) => {
      assert.throws(getColors, /isn't array/);
      done();
    });
  });

  it('should return array from file with 3 elements', () => {
    const colors = getColors();
    
    assert(Array.isArray(colors), 'returned not array');
    assert.equal(colors.length, 3, `returned array with ${colors.length} elements istead of the 3 elements`); 
  });
});