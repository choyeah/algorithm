let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// const modResult = input.reduce((acc, curr) => {
//   const tmp = Number(curr) % 42;
//   if (!acc.includes(tmp)) {
//     acc.push(tmp);
//   }
//   return acc;
// }, []);
// console.log(modResult.length);

const modResult = new Set();
for (let i of input) {
  const tmp = Number(i) % 42;
  modResult.add(tmp);
}
console.log(modResult.size);
