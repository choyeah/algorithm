const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, target] = input[0].split(" ");
let numbers = input[1].split(" ").map(Number);
numbers.sort((a, b) => a - b);
console.log(numbers[target - 1]);
