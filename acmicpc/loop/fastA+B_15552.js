let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let result = "";
for (let i = 1; i <= Number(input[0]); i++) {
  let n = input[i].split(" ");
  result += parseInt(n[0]) + parseInt(n[1]) + "\n";
}

console.log(result);
