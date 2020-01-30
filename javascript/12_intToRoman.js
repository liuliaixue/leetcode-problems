/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let result = "";
  let rest = num;
  while (rest > 0) {
    if (rest >= 1000) {
      result += "M";
      rest -= 1000;
    } else if (rest >= 900) {
      result += "CM";
      rest -= 900;
    } else if (rest >= 500) {
      result += "D";
      rest -= 500;
    } else if (rest >= 400) {
      result += "CD";
      rest -= 400;
    } else if (rest >= 100) {
      result += "C";
      rest -= 100;
    } else if (rest >= 90) {
      result += "XC";
      rest -= 90;
    } else if (rest >= 50) {
      result += "L";
      rest -= 50;
    } else if (rest >= 40) {
      result += "XL";
      rest -= 40;
    } else if (rest >= 10) {
      result += "X";
      rest -= 10;
    } else if (rest >= 9) {
      result += "IX";
      rest -= 9;
    } else if (rest >= 5) {
      result += "V";
      rest -= 5;
    } else if (rest === 4) {
      result += "IV";
      rest -= 4;
    } else {
      result += "I";
      rest -= 1;
    }
  }

  return result;
};

// console.log(intToRoman(3)); // III
// console.log(intToRoman(4)); // IV
// console.log(intToRoman(5)); // V
// console.log(intToRoman(1994)); // MCMXCIV
