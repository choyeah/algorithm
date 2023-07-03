function multiple(n) {
  if (n <= 1) {
    return n;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

let r1 = multiple(5);
console.log(r1);

function rMultiple(n) {
  if (n <= 1) {
    return n;
  }
  return n * rMultiple(n - 1);
}
let r2 = multiple(5);
console.log(r2);
