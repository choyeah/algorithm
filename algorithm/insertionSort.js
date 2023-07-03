function insertionSort(data) {
  let len = data.length - 1;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (data[j - 1] > data[j]) {
        [data[j - 1], data[j]] = [data[j], data[j - 1]];
      } else {
        break;
      }
    }
  }
  return data;
}

let arr = Array.from({ length: 30 }, () => Math.floor(Math.random() * 30));
const result = insertionSort(arr);

console.log(result);
