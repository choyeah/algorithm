function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let swap = false;
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!swap) break;
  }

  return arr;
}
let arr = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));
const result = bubbleSort(arr);

console.log(result);
