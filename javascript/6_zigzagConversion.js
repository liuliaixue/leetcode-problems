/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const cycle = 2 * (numRows - 1);
  const loop = parseInt(s.length / cycle);
  const extra = s.length % cycle;
  console.log({ cycle, loop, extra });

  const indexMap = (cycleIndex, nIndex) => {
    if (cycleIndex > 0) {
      if (nIndex === 0 || nIndex === numRows - 1)
        return indexMap(cycleIndex - 1, nIndex) + 1;
      else {
        return indexMap(cycleIndex - 1, nIndex) + 2;
      }
    }

    if (nIndex === 0) {
      return 0;
    } else if (nIndex === 1) {
      return loop + (extra > nIndex - 1 ? 1 : 0);
    } else if (nIndex <= numRows - 1) {
      return (
        indexMap(cycleIndex, nIndex - 1) +
        2 * loop +
        (extra > nIndex - 1 ? nIndex : 0)
      );
    } else {
      return indexMap(cycleIndex, 2 * numRows - 2 - nIndex) + 1;
    }
  };

  let out = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    let cycleIndex = parseInt(i / cycle);
    let n = i % cycle;
    // 第 cycleIndex个周期的第 n个字符
    let index = indexMap(cycleIndex, n);
    // console.log({ i: s[i], cycleIndex, n, index });

    out[index] = s[i];
  }

  return out.join("");
};
// convert("0123456789ABCDEFGH", 4);
// convert("0123456789ABCDEFGHI", 4);

// convert("PAYPALISHIRING", 3);
convert("A", 1);
