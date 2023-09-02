const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const result = [];
for (let i = 1; i < input.length; i++) {
  const line = input[i].split(" ");
  const n = Number(line[0]);
  const scores = line.slice(1).map(Number);

  const sum = scores.reduce((acc, curr) => acc + curr, 0);
  const average = sum / n;

  const overAverage = scores.filter((score) => score > average).length;
  const percentage = (overAverage / n) * 100;

  result.push(percentage.toFixed(3) + "%");
}

console.log(result.join("\n"));
