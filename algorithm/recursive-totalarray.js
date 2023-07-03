function totalArray(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
let r1 = totalArray([1, 2, 3, 4, 5, 6]);
console.log(r1);

function rTotalArray(arr, i = 0) {
  let result = 0;
  if (i == 0) {
    return arr[0];
  }
  return arr[i] + rTotalArray(arr, i - 1);
}
let r2 = rTotalArray([1, 2, 3, 4, 5, 6], 5);
console.log(r2);

function sumList(data) {
  let result = 0;
  if (data.length <= 1) {
    return data[0];
  } else {
    return data[0] + sumList(data.slice(1));
  }
}
let r3 = sumList([1, 2, 3, 4, 5, 6]);
console.log(r3);
