const [n, input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let copyX = input.split(" ").map(Number);
copyX = Array.from(new Set(copyX)).sort((a, b) => a - b);
let indexMap = new Map();

copyX.forEach((value, index) => {
  indexMap.set(value, index);
});
let result = input
  .split(" ")
  .map(Number)
  .map((value) => indexMap.get(value));

console.log(result.join(" "));
