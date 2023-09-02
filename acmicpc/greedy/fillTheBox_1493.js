let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [L, W, H] = input[0].split(" ").map(Number);
const N = Number(input[1]);
let CUBES = [];
for (let i = 2; i < N + 2; i++) {
  let [size, count] = input[i].split(" ").map(Number);
  CUBES[size] = count;
}

let totalCubes = 0;
let usedCubesVolume = 0;
let largestExponent = Math.min(
  Math.floor(Math.log2(L)),
  Math.floor(Math.log2(W)),
  Math.floor(Math.log2(H))
);

for (let i = largestExponent; i >= 0; i--) {
  usedCubesVolume *= 8;
  let currentCubeSideLen = 2 ** i;

  let requiredCubeCount =
    parseInt(L / currentCubeSideLen) *
      parseInt(W / currentCubeSideLen) *
      parseInt(H / currentCubeSideLen) -
    usedCubesVolume;

  let numCubesToUse = Math.min(requiredCubeCount, CUBES[i] || 0);
  totalCubes += numCubesToUse;
  usedCubesVolume += numCubesToUse;
}
console.log(usedCubesVolume, totalCubes);
console.log(usedCubesVolume === L * W * H ? totalCubes : -1);
