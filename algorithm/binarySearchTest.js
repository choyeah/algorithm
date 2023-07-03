var a = [4, 1, 5, 2, 3];
a.sort();
var b = [1, 3, 7, 9, 5];

function find(target, start, end) {
  if (start > end) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);
  if (target === a[mid]) {
    return true;
  } else if (target < a[mid]) {
    return find(target, start, mid - 1);
  } else {
    return find(target, mid + 1, end);
  }
}

for (let i = 0; i < b.length; i++) {
  let r = find(b[i], 0, a.length - 1);
  console.log(r ? "1" : "0");
}
