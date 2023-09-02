let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

input.sort((a, b) => a - b);
console.log(input.join(" "));
