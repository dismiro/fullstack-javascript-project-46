import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const result = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';

test('test json files', () => {
  const file1 = (getFixturePath('file1.json'));
  const file2 = (getFixturePath('file2.json'));
  expect(gendiff(file1, file2))
    .toEqual(result);
});
test('test yaml files', () => {
  const file1 = (getFixturePath('file1.yaml'));
  const file2 = (getFixturePath('file2.yaml'));
  expect(gendiff(file1, file2))
    .toEqual(result);
});
