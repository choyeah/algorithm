let [input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [a, b, c] = input.split(" ").map(Number);
let price = 0;

if (a === b && b === c) {
  price = 10000 + a * 1000;
} else if (a === b) {
  price = 1000 + a * 100;
} else if (b === c) {
  price = 1000 + b * 100;
} else if (a === c) {
  price = 1000 + c * 100;
} else {
  price = Math.max(a, b, c) * 100;
}

console.log(price);
