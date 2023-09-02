const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const S = Number(input[0]);

let sum = 0;
let count = 0;

while (sum + count < S) {
  sum += ++count;
}

console.log(count);
