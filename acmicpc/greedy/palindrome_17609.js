let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);

function isPalindrome(str, start, end) {
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }

    start++;
    end--;
  }
  return true;
}

function checkPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      if (isPalindrome(str, start - 1, end)) {
        return 1;
      } else if (isPalindrome(str, start, end - 1)) {
        return 1;
      } else {
        return 2;
      }
    }

    start++;
    end--;
  }
  return 0;
}

let result = [];
for (let i = 1; i <= n; i++) {
  result.push(checkPalindrome(input[i].split("")));
}
console.log(result.join("\n"));
/**
* 7
abba
summuus
xabba
xabbay
comcom
comwwmoc
comwwtmoc
*/
