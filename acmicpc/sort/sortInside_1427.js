const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let r = input[0]
  .split("")
  .sort((a, b) => b - a)
  .join("");
console.log(r);
