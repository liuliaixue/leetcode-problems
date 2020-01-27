/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const len = s.length;
  let length = 0;

  let left = 0;
  const repeat = new Set();

  for (let right = left; right < len; right++) {
    console.log(left, right);
    while (repeat.has(s[right])) {
      repeat.delete(s[left]);
      left = left + 1;
    }
    repeat.add(s[right], 1);
    length = right - left + 1 > length ? right - left + 1 : length;
  }

  console.log({ length });
  return length;
};

// lengthOfLongestSubstring(
//   "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
// );
// lengthOfLongestSubstring("abcbbcdf");

// lengthOfLongestSubstring(" ");
