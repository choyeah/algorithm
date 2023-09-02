let [n, input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input = input.split(" ").sort((a, b) => a - b);
let result = 0;
for (let i = 0; i < n; i++) {
  result += input[i] * (n - i);
}
console.log(result);
