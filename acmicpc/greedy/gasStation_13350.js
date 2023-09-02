const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
let distances = input[1].split(" ").map(Number);
let gasPrices = input[2].split(" ").map(Number);

let minGasPrice = Infinity;
let result = BigInt(0);
for (let i = 0; i < N; i++) {
  if (minGasPrice > gasPrices[i]) {
    minGasPrice = gasPrices[i];
  }
  if (distances[i] !== undefined) {
    result += BigInt(distances[i]) * BigInt(minGasPrice);
  }
}

console.log(String(result));
