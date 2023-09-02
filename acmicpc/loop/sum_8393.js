let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let result = (n * (n + 1)) / 2;

console.log(result);
