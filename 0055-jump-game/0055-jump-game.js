/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let target = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; ) {
    if (nums[i] + i >= target) {
      target = i;
      i--;
    } else {
      i--;
    }
  }

  if (target == 0) return true;

  return false;
};
