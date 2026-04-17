var productExceptSelf = function (nums) {
  let prefix = new Array(nums.length);
  let posfix = new Array(nums.length);
  prefix[0] = nums[0];
  posfix[nums.length - 1] = nums[nums.length - 1];
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    posfix[i] = posfix[i + 1] * nums[i];
  }

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) ans.push(posfix[i + 1]);
    else if (i == nums.length - 1) ans.push(prefix[i - 1]);
    else ans.push(posfix[i + 1] * prefix[i - 1]);
  }
  return ans;
};
