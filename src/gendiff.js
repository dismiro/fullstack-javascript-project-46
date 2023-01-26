import * as fs from 'node:fs'
import path from 'node:path';

function getDataFromFile(pathToFile) {
    const rawdata = fs.readFileSync(path.resolve(...pathToFile));
    return JSON.parse(rawdata);
}

export {getDataFromFile }