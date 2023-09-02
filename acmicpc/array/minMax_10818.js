let [n, input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

numbs = input.split(" ").map(Number);
const min = Math.min(...numbs);
const max = Math.max(...numbs);
console.log(min + " " + max);
