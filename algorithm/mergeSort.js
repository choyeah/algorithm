function mergeSort(arr) {
  if (arr.length <= 1) {
    return;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  mergeSort(left);
  mergeSort(right);

  merge(arr, left, right);
}

function merge(arr, left, right) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

const arr = [3, 7, 2, 8, 11, 30, 1, 6, 4, 9, 9];
mergeSort(arr);
console.log(arr);
