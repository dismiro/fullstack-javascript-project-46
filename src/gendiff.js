// eslint-disable-next-line import/no-extraneous-dependencies
import yaml from 'js-yaml';
import * as fs from 'node:fs';
import path from 'node:path';

function getDataFromFile(filepath) {
  const correctPath = path.resolve(process.cwd(), filepath);
  const rawdata = fs.readFileSync(correctPath);
  switch (path.extname(correctPath)) {
    case ('.json'):
      return JSON.parse(rawdata);
    case ('.yaml' || '.yml'):
      return yaml.load(rawdata);
    default:
      console.log('Данный тип файла не поддерживается!');
      return null;
  }
}
function gendiff(filepath1, filepath2) {
  const firstFile = getDataFromFile(filepath1);
  const secondFile = getDataFromFile(filepath2);
  const sortedkeys = Object.keys({ ...firstFile, ...secondFile }).sort();
  const outputData = sortedkeys.reduce((acc, key) => {
    if (!Object.hasOwn(firstFile, key)) acc[`+ ${key}`] = secondFile[key];
    else if (!Object.hasOwn(secondFile, key)) acc[`- ${key}`] = firstFile[key];
    else if (firstFile[key] === secondFile[key]) acc[`  ${key}`] = firstFile[key];
    else {
      acc[`- ${key}`] = firstFile[key];
      acc[`+ ${key}`] = secondFile[key];
    }
    return { ...acc };
  }, {});
  return JSON.stringify(outputData, null, 2).replace(/[,"]/g, '');
}
export default gendiff;
