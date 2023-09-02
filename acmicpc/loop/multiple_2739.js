let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let result = "";

for (let i = 1; i <= 9; i++) {
  result += `${n} * ${i} = ${n * i}\n`;
}

console.log(result);
