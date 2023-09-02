const input = require("fs").readFileSync(0).toString().trim().split("\n");

let result = "";
for (let i = 1; i < input.length; i++) {
  let [n, line] = input[i].split(" ");
  for (let alpabet of line) {
    for (let k = 0; k < n; k++) {
      result += alpabet;
    }
  }
  result += "\n";
}
console.log(result);
