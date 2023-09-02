const input = require("fs").readFileSync(0).toString().trim().split("\n");

const result = input[0].split(" ").filter((words) => words !== "").length;
console.log(result);
