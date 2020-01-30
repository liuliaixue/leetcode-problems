/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return "";

  let common = "";

  let len = strs[0].length;

  out: for (let i = 0; i < len; i++) {
    let tmp = strs[0][i];
    for (let str of strs) {
      if (tmp !== str[i]) break out;
    }
    common += tmp;
  }

  return common;
};

// longestCommonPrefix(["flower", "flow", "flight"]);
