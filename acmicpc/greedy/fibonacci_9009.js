let [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
let fibo = [0, 1];
const maxInput = Math.max(...input);
while (fibo[fibo.length - 1] <= maxInput) {
  fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);
}

let answer = "";
for (let i = 0; i < N; i++) {
  let target = input[i];
  let fiboNums = [];
  let j = fibo.length - 1;
  while (target > 0) {
    if (target >= fibo[j]) {
      target -= fibo[j];
      fiboNums.push(fibo[j]);
    }
    j--;
  }
  answer += fiboNums.reverse().join(" ") + "\n";
}
console.log(answer);
