const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const lines = input.map((e) => {
  const [x, y] = e.split(" ");
  return [Number(x), Number(y)];
});

lines.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let result = "";
for (const line of lines) {
  result += line[0] + " " + line[1] + "\n";
}
console.log(result);
