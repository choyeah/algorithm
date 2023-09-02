const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [A, B] = input[0].split(" ").map(Number);
let count = 0;

while (A < B) {
  if (B % 2 === 0) {
    B /= 2;
  } else if (B % 10 === 1) {
    B = parseInt(B / 10);
  } else {
    break;
  }
  count++;
}

if (A !== B) {
  count = -1;
}

console.log(count);
