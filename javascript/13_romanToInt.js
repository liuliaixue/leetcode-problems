/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const table = {
    I: 1,
    IV: 4,
    V: 5,

    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  let rest = s;
  let result = 0;
  while (rest.length) {
    for (let symbol of symbols) {
      if (rest.startsWith(symbol)) {
        result += table[symbol];
        rest = rest.slice(symbol.length);
        break;
      }
      //   if (
      //     (symbol[1] && symbol[1] == rest[1] && rest[0] === symbol[0]) ||
      //     (!symbol[1] && symbol[0] == rest[0])
      //   ) {
      //     result += table[symbol];
      //     rest = rest.slice(symbol.length);
      //     break;
      //   }
    }
  }

  return result;
};

// console.log(romanToInt("III")); // 3
// console.log(romanToInt("MCMXCIV")); // 1994
