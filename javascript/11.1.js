/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0,
    area = 0,
    left = 0,
    right = height.length - 1;
  while (left !== right) {
    if (height[left] > height[right]) {
      area = height[right] * (right - left);
      right--;
    } else {
      area = height[left] * (right - left);
      left++;
    }
    max = Math.max(max, area);
  }
  return max;
};
