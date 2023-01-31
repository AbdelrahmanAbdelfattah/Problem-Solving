/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1.sort(function (a, b) {
    return a - b;
  });
  nums2.sort(function (a, b) {
    return a - b;
  });

  let ans = [];
  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      ans.push(nums1[i]);
      i++, j++;
    } else if (nums1[i] < nums2[j]) i++;
    else j++;
  }
  return ans;
};