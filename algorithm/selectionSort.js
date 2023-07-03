function selectionSort(data) {
  let len = data.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [data[i], data[minIndex]] = [data[minIndex], data[i]];
    }
  }

  return data;
}

const result = selectionSort([10, 5, 8, 2, 1, 6]);
console.log(result); // [1, 2, 5, 6, 8, 10]
