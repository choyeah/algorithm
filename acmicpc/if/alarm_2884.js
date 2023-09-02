let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [h, m] = input.split(" ").map(Number);

if (m < 45) {
  h -= 1;
  m += 15;
  if (h < 0) h = 23;
} else {
  m -= 45;
}

console.log(h + " " + m);
