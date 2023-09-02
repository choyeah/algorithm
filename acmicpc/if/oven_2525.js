let [current, cookingTime] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

let [h, m] = current.split(" ").map(Number);
let totalMinute = (h * 60 + m + Number(cookingTime)) % 1440;
h = parseInt(totalMinute / 60);
m = parseInt(totalMinute % 60);
console.log(h + " " + m);
