function func(n) {
  console.log(n);
  if (n <= 1) {
    return;
  }

  if (n % 2 === 0) {
    return func(n / 2);
  } else {
    return func(3 * n + 1);
  }
}
let r1 = func(100);
console.log(r1);
