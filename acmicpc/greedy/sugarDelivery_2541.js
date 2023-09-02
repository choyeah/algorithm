const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let remain = Number(input[0]);
let result = 0;

while (remain > 0) {
  if (remain % 5 === 0) {
    let mok = Math.floor(remain / 5);
    remain -= mok * 5;
    result += mok;
    break;
  }
  remain -= 3;
  result++;
}

if (remain !== 0) {
  result = -1;
}

console.log(result);
