const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = input.shift(); // 입력의 첫 줄에서 n 값을 구하는 것으로 가정합니다.
input.forEach((v) => {
  const chars = new Set();
  for (let i = 0; i < v.length; i++) {
    if (chars.has(v[i]) && v[i - 1] !== v[i]) {
      n--;
      break;
    }
    chars.add(v[i]);
  }
});

console.log(n);
