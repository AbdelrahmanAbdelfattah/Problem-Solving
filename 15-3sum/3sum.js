var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};