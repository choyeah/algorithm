const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let r = input
  .map((e) => {
    const p = e.split(" ");
    return [Number(p[0]), p[1]];
  })
  .sort((a, b) => {
    return a[0] - b[0];
  })
  .map((v) => `${v[0]} ${v[1]}`)
  .join("\n");
console.log(r);
