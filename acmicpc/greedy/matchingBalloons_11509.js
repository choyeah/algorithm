let [N, ...balloons] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v, i) => (i === 0 ? Number(v) : v.split(" ").map(Number)));

let numberOfArrows = 0;
let arrowTable = {};

for (let h of balloons[0]) {
  if (arrowTable[h] > 0) {
    arrowTable[h] -= 1;
  } else {
    numberOfArrows += 1;
  }
  arrowTable[h - 1] = (arrowTable[h - 1] || 0) + 1;
}
console.log(numberOfArrows);
