let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let testCaseCnt = input[0];
let index = 1;

for (let i = 0; i < testCaseCnt; i++) {
  let N = Number(input[index]);
  // 배열 추출
  let arr = [];
  for (let j = index + 1; j <= index + N; j++) {
    let el = input[j].split(" ").map(Number);
    arr.push(el);
  }

  // 정렬
  arr.sort((a, b) => a[0] - b[0]);

  // 계산
  let count = 0;
  let minValue = Infinity;
  for (let [x, y] of arr) {
    if (y < minValue) {
      minValue = y;
      count += 1;
    }
  }

  // 출력
  console.log(count);

  // 인덱스 갱신
  index = index + N + 1;
}
