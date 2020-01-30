/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let value = parseInt(str);
  if (!value) {
    return 0;
  }
  if (value > 2147483647) return 2147483647;
  if (value < -2147483648) return -2147483648;
  return value;
};
