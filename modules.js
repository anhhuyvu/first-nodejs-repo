const names = require('./name');
const sayHi =require('./utils');

const amount = 12;

if (amount < 10) {
  console.log('This is a small number');
} else {
  console.log('This is a large number');
}

sayHi(names.name_1);
sayHi(names.name_2);