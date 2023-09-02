const [total, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let numbers = input.map(Number);
numbers.sort((a, b) => a - b);
console.log(numbers.join("\n"));
