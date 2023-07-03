function func(n) {
  if (n <= 1) {
    return 1;
  }

  if (n == 2) {
    return 2;
  }

  if (n == 3) {
    return 4;
  }

  return func(n - 1) + func(n - 2) + func(n - 3);
}

let r1 = func(1);
console.log(r1);
r1 = func(2);
console.log(r1);
r1 = func(3);
console.log(r1);
r1 = func(5);
console.log(r1);
r1 = func(6);
console.log(r1);
r1 = func(7);
console.log(r1);
r1 = func(8);
console.log(r1);
r1 = func(10);
console.log(r1);
