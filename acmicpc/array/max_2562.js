let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const numbs = input.map(Number);
const max = Math.max(...numbs);
const maxIndex = numbs.indexOf(max);
console.log(max);
console.log(maxIndex + 1);
