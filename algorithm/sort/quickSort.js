function quickSort(data) {
  if (data.length <= 1) {
    return data;
  }

  let left = [];
  let right = [];
  const pivot = data[0];

  for (let i = 0; i < data.length; i++) {
    if (pivot > data[i]) {
      left.push(data[i]);
    } else if (pivot < data[i]) {
      right.push(data[i]);
    }
  }

  return [
    ...quickSort(left),
    ...data.filter((num) => num === pivot),
    ...quickSort(right),
  ];
}

let r1 = quickSort([3, 7, 2, 8, 11, 30, 1, 6, 4, 9, 9]);
console.log(r1);
