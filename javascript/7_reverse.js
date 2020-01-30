/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);
  const s = [];
  let i = x;
  while (i) {
    s.push(i % 10);
    i = parseInt(i / 10);
  }
  console.log(s);
  let sum = 0;
  while (s.length) {
    sum = sum * 10 + s.shift();
  }
  console.log({ sum });
  return sum > MAX || sum < MIN ? 0 : sum;
};

// console.log(reverse(100));
// console.log(reverse(-100));

console.log(reverse(123));
