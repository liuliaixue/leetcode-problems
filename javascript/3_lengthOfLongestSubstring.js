/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const len = s.length;
  let length = 0;

  startChar: for (let start = 0; start < len + 1; start++) {
    const repeatObjStart = {};
    endChar: for (let end = start + 1; end < len + 1; end++) {
      if (repeatObjStart[s[end - 1]]) {
        continue startChar;
      }
      repeatObjStart[s[end - 1]] = 1;
      length = end - start > length ? end - start : length;
    }
    delete repeatObjStart;
  }
  console.log({ length });
  return length;
};

// lengthOfLongestSubstring(
//   "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
// );
// lengthOfLongestSubstring("bbbb");
