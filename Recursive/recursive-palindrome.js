function palindrome1(arr) {
  if (arr.length === 1) {
    return true;
  }

  if (arr[0] === arr[arr.length - 1]) {
    return palindrome1(arr.slice(1, -1));
  } else {
    return false;
  }
}
let r1 = palindrome1("hello");
console.log(r1);

let r2 = palindrome1("hoasdflfdsaoh");
console.log(r2);
