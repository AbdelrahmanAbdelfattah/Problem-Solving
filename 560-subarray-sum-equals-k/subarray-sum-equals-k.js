var subarraySum = function (nums, k) {
  let res = 0;
  let prefix = new Map();
  let sum = 0;
  prefix.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (prefix.has(sum - k)) {
      res += prefix.get(sum - k);
    }
    prefix.set(sum, (prefix.get(sum) || 0) + 1);
  }
  return res;
};