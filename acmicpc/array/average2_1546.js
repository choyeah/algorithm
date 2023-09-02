const input = require("fs").readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const scores = input[1].split(" ").map(Number);
const MAX = Math.max(...scores);
let sum = 0;
scores.forEach((curr) => {
  sum += (curr / MAX) * 100;
}, 0);
console.log(sum / N);
