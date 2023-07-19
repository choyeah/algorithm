function quickSortRandomPivot(data, low, high) {
  if (low < high) {
    const pivotIndex = getRandomPivotIndex(low, high);
    partition(data, low, high, pivotIndex);
    quickSortRandomPivot(data, low, pivotIndex - 1);
    quickSortRandomPivot(data, pivotIndex + 1, high);
  }
}

function partition(data, low, high, pivotIndex) {
  const pivot = data[pivotIndex];
  swap(data, pivotIndex, high);

  let i = low;
  for (let j = low; j < high; j++) {
    if (data[j] < pivot) {
      swap(data, i, j);
      i++;
    }
  }

  swap(data, i, high);
}

function getRandomPivotIndex(low, high) {
  // low와 high 사이의 무작위 인덱스를 반환합니다.
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

function swap(data, i, j) {
  // 두 요소의 위치를 교환합니다.
  [data[i], data[j]] = [data[j], data[i]];
}

const arr = [3, 7, 2, 8, 11, 30, 1, 6, 4, 9, 9];
quickSortRandomPivot(arr, 0, arr.length - 1);
console.log(arr);
