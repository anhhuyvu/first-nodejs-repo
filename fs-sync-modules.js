const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');

console.log(first);

writeFileSync('./content/result-sync.txt', `Here is the result ${first}`, {
  encoding: 'utf8',
  flag: 'a+',
  mode: 0o666,
});