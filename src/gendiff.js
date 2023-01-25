import * as fs from 'node:fs'

let rawdata = fs.readFileSync('../json_files/file1.json');
const firstFile = JSON.parse(rawdata);
rawdata = fs.readFileSync('../json_files/file2.json');
const secondFile = JSON.parse(rawdata);
console.log(firstFile)
console.log(secondFile)