function fibo(n) {
  if (n <= 1) {
    return 1;
  }

  let cache = new Array(n + 1);
  cache[0] = 0;
  cache[1] = 1;
  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  return cache[n];
}

// let f1 = fibo(2);
// console.log(f1);

function tile(n) {
  if (n < 1 || n > 1000) {
    return false;
  }

  let tiles = new Array(n + 1);
  tiles[0] = 0;
  tiles[1] = 1;
  tiles[2] = 2;

  for (let i = 3; i <= n; i++) {
    tiles[i] = tiles[i - 1] + tiles[i - 2];
  }
  return tiles[n] % 10007;
}
// let t1 = tile(4);
// console.log(t1);

function padovanSequence(n) {
  if (n < 1 || n > 100) {
    return false;
  }

  let seq = new Array(n + 1);
  seq[0] = 0;
  seq[1] = 1;
  seq[2] = 1;

  for (let i = 3; i <= n; i++) {
    seq[i] = seq[i - 2] + seq[i - 3];
    /**
    seq[i+3] = seq[i] + seq[i+1] 방식
    현재 항을 구하기 위해 앞선 항들을 사용하는 점화식으로, 앞서 계산한 항들을 재사용할 수 있습니다. 
    이 방식은  이전 항들을 따로 저장해두지 않고도 다음 항을 계산할 수 있습니다.
    재귀적인 구현에 적합하며, 더 간결한 코드로 구현할 수 있습니다.
    두 가지 방식의 선택은 사용하는 상황과 개발자의 선호도에 따라 달라집니다. 
    메모리 사용량과 계산 효율성을 고려할 때, 첫 번째 방식이 더 효율적일 수 있습니다. 
    그러나 코드의 가독성과 간결성을 중시한다면 두 번째 방식이 선호될 수 있습니다.
   */
  }

  return seq[n];
}
let p1 = padovanSequence(11);
console.log(p1);
