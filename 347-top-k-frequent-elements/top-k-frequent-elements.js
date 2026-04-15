/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 // nlog(n) solution 
// var topKFrequent = function (nums, k) {
//   let mp = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (!mp.has(nums[i])) mp.set(nums[i], 1);
//     else mp.set(nums[i], mp.get(nums[i]) + 1);
//   }
//   let sorted_map = Array.from([...mp]).sort((a, b) => b[1] - a[1]);
//   console.log("-----");
//   let ans = [];
//   for (let i = 0; i < k; i++) {
//     ans.push(sorted_map[i][0]);
//   }

//   return ans;
// };

// Bucket sort with o(n)
var topKFrequent = function (nums, k) {
  let mp = new Map();

  for (let num of nums) {
    mp.set(num, (mp.get(num) || 0) + 1);
  }

  let freq = Array.from({ length: nums.length + 1 }, () => []);

  for (let [num, count] of mp) {
    freq[count].push(num);
  }

  let ans = [];

  for (let i = freq.length - 1; i >= 0 && ans.length < k; i--) {
    for (let num of freq[i]) {
      ans.push(num);
      if (ans.length === k) break;
    }
  }

  return ans;
};