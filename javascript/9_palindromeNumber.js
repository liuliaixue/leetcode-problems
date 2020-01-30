/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  const xstring = x.toString();

  let check = true;
  let index = 0;
  while (index < xstring.length / 2) {
    if (xstring[index] != xstring[xstring.length - index - 1]) {
      check = false;
      break;
    }

    index++;
  }
  return check;
};
// console.log(isPalindrome(1), isPalindrome(-1), isPalindrome(121));
