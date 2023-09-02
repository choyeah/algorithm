let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = 0;
let groups = input[0].split("-");
for (let i = 0; i < groups.length; i++) {
  const sum = groups[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);

  result += i === 0 ? +sum : -sum;
}
console.log(result);
