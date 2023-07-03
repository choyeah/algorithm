//ATM
function minTotalWaitingTime(N, P) {
  P.sort((a, b) => {
    console.log({ a, b });
    return a - b;
  });
  let totalWaitTime = 0;
  for (let i = 0; i < N; i++) {
    totalWaitTime += P[i] * (N - i);
  }
  return totalWaitTime;
}
let N = 5;
let P = [3, 1, 4, 3, 2];
P.sort((a, b) => {
  return 1;
});
console.log(P);
//console.log(minTotalWaitingTime(N, P)); // Output: 32
