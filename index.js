const fs = require("fs/promises");

function sumNumbers(num1, num2) {
  return new Promise(async (resolve, reject) => {
    if (typeof num1 != 'number' || typeof num2 != 'number') return reject('ERROR: One or more inputs given are not numbers.');
    resolve(await fs.appendFile('result.txt', `${num1 + num2}\n`), console.log(num1 + num2));
  });
}

sumNumbers(10,10).catch(console.log);
sumNumbers('5',10).catch(console.log);
sumNumbers(5,'10').catch(console.log);
sumNumbers(5,10).catch(console.log);