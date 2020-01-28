/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longest = 0;
  let longestP = "";
  const len = s.length;
  if (!len) {
    return "";
  }
  for (let mid = 0; mid < len; mid++) {
    let padding = 0;
    while (
      mid + padding < len &&
      mid - padding >= 0 &&
      s[mid + padding] === s[mid - padding]
    ) {
      //   console.log(mid, padding, longestP);
      longestP =
        2 * padding + 1 > longest
          ? s.slice(mid - padding, mid + padding + 1)
          : longestP;

      longest = Math.max(2 * padding + 1, longest);

      padding++;
    }

    let padding2 = 0;
    while (
      mid + 1 + padding2 < len &&
      mid - padding2 >= 0 &&
      s[mid + 1 + padding2] === s[mid - padding2]
    ) {
      //   console.log(mid, padding2, longestP);
      longestP =
        2 * padding2 + 2 > longest
          ? s.slice(mid - padding2, mid + padding2 + 2)
          : longestP;

      longest = Math.max(2 * padding2 + 2, longest);

      padding2++;
    }
  }
  console.log({ longest, longestP });
  return longestP;
};

// longestPalindrome("abbccbb");
// ("aabbc");
