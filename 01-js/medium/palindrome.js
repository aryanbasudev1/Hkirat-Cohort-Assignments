/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/g, ''); //removes all non alphanumeric characters
  //  pointers for the start and end of the string
  let start = 0;
  let end = str.length - 1;

  // Check if the string is a palindrome
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }

    start++;
    end--;
  }

  // If the loop completes without returning false, the string is a palindrome
  return true;
}

module.exports = isPalindrome;
