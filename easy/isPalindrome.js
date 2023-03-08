function isPalindriome(x) {
  if (typeof x === "number") {
    x = x.toString();
  }
  let reversedString = x.split("").reverse().join("");
  if (reversedString === x) return true;
  else return false;
}

console.log(isPalindriome(10));

//recursive approach

function isPalindromeR(x) {
  if (typeof x !== "string") {
    x = x.toString();
  }
  if (x.length === 0) return true;
    if (x.length === 1) {
      return true;
    }

  let start = x[0];
  let end = x[x.length - 1];
  if (start !== end) {
    return false;
  }
  //   if (x.length === 2) {
  //     return true;
  //   }
  let substring = x.substring(1, x.length - 1);
  console.log(substring);
  return isPalindromeR(substring);
}

console.log(isPalindromeR(1666666661));
