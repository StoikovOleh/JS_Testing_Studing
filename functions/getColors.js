import fs from 'fs';

const getColorsFromFile = () => JSON.parse(fs.readFileSync(process.cwd() + '/colors.json').toString());

export default () => {
  const colors = getColorsFromFile().colors;

  if(!Array.isArray(colors)) {
    throw new Error('isn\'t array');
  }

  return colors;
}