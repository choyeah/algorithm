//https://www.acmicpc.net/problem/11399

const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let totalWaitingTime = 0;
const N = n;
const P = input[0].split(" ");
P.sort((a, b) => a - b);
for (let i = 0; i < N; i++) {
  totalWaitingTime += P[i] * (N - i);
}
console.log(totalWaitingTime);
