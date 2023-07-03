function binarySearchWhile(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

function binarySearchReculsive(arr, target, start, end) {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    start = mid + 1;
    return binarySearchReculsive(arr, target, start, end);
  } else {
    end = mid - 1;
    return binarySearchReculsive(arr, target, start, end);
  }
}

const arr = [2, 4, 6, 8, 10, 12];
const target = 9;
const resultIndex = binarySearchWhile(arr, target);
console.log(resultIndex); // 3

const resultIndex2 = binarySearchReculsive(arr, target, 0, arr.length - 1);
console.log(resultIndex2); // 3
