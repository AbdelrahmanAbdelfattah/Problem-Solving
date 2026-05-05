/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let mp = new Map();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    mp.set(nums[i], (mp.get(nums[i]) || 0) + 1);
  }
  for (let [num, count] of mp) {
    if (count > nums.length / 3) result.push(num);
  }
  return result;
};
