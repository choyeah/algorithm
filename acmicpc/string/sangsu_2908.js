// const input = require("fs").readFileSync(0).toString().trim().split("\n");
// const numbs = input[0].split(" ").map((val, idx) => {
//   return parseInt(val.split("").reverse().join(""));
// });
// console.log(Math.max(...numbs));

const numbs = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map((val) => parseInt(val.split("").reverse().join("")));
console.log(Math.max(...numbs));
