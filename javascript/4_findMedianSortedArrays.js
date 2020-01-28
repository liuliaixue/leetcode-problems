/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const newArray = nums1.concat(nums2).sort((a, b) => a - b);

  let len = newArray.length;
  if (len % 2 === 1) {
    return newArray[(len - 1) / 2];
  } else {
    return (newArray[len / 2 - 1] + newArray[len / 2]) / 2;
  }
};
