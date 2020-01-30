/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = (j - i) * Math.min(height[i], height[j]);
      //   console.log(height[i], height[j], area);
      max = Math.max(max, area);
    }
  }
  //   console.log({ max });
  return max;
};

// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
