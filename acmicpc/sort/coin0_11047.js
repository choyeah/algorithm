let [info, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = 0;
let [n, k] = info.split(" ").map(Number);
input = input.map(Number).sort((a, b) => b - a);

for (let v of input) {
  if (k >= v) {
    result += Math.floor(k / v);
    k %= v;
  }
  if (k <= 0) break;
}

console.log(result);
