/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 // nlog(n) solution 
var topKFrequent = function (nums, k) {
  let mp = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!mp.has(nums[i])) mp.set(nums[i], 1);
    else mp.set(nums[i], mp.get(nums[i]) + 1);
  }
  let sorted_map = Array.from([...mp]).sort((a, b) => b[1] - a[1]);
  console.log("-----");
  let ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(sorted_map[i][0]);
  }

  return ans;
};
