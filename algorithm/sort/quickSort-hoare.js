function quickSortHoare(arr, low, hight) {
  if (low < hight) {
    const partitionIndex = partition(arr, low, hight);

    quickSortHoare(arr, low, partitionIndex);
    quickSortHoare(arr, partitionIndex + 1, hight);
  }
}
function partition(arr, low, hight) {
  let i = low;
  let j = hight;
  let pivot = arr[Math.floor((low + hight) / 2)];
  while (true) {
    while (pivot > arr[i]) {
      i++;
    }
    while (pivot < arr[j]) {
      j--;
    }
    if (i >= j) {
      return j;
    }
    swap(arr, i, j);
    i++;
    j--;
  }
}
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

const arr = [3, 7, 2, 8, 11, 30, 1, 6, 4, 9, 9];
quickSortHoare(arr, 0, arr.length - 1);
console.log(arr);
