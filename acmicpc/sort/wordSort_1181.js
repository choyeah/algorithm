const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.sort((a, b) => {
  const aLen = a.length;
  const bLen = b.length;

  if (aLen === bLen) {
    if (a < b) return -1;
    if (a > b) return 1;
  } else {
    return aLen - bLen;
  }
});

const set = new Set(input);
let result = Array.from(set).join("\n");
console.log(result);
