/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
  let mx = 0;

  for (let i = 0; i < nums1.length; i++) {
    let j = i;
    while (j < nums2.length && nums2[j] >= nums1[i]) {
      mx= Math.max(j-i,mx); 
      j++;
    }
  }

  return mx;
};
