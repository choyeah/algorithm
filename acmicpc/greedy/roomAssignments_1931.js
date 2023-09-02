let [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v, i) => (i === 0 ? Number(v) : v.split(" ").map(Number)));

input.sort((a, b) => {
  return a[1] - b[1] || a[0] - b[0];
});

let current = 0;
let result = 1;
for (let i = 1; i < N; i++) {
  if (input[current][1] <= input[i][0]) {
    current = i;
    result++;
  }
}
console.log(result);
