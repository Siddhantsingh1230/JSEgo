// Two numbers or strings are said to be palindrome if and only if the reverse of the numbers or strings are exactly same
// example: number:(1221),string:(civic,level,racecar)

// 1> Only works for number type
const palindrome = (num) => {
  let numCopy = num;
  let palindromeNum = 0;
  while (num > 0) {
    palindromeNum = palindromeNum * 10 + (num % 10);
    num = Math.trunc(num / 10);
  }
  return palindromeNum === numCopy;
};

console.log(palindrome(12321));

// 2> Works for string type and is a better solution

const stringPalindrome = (str) => {
  let palindromeStr = String(str).split("").reverse().join("");
  // there is no string reverse so we converted string to array then reversed it then again joined to form a string
  return palindromeStr == str;
};

console.log(stringPalindrome(12321));
