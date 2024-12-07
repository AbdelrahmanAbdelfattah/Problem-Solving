var valid = function (nums, penalty, maxOperations) {
  let requiredOps = 0;
  for (let n of nums) {
    let x = Math.floor(n / penalty);
    if (n % penalty == 0) x--;
    requiredOps += x;
  }
  return requiredOps <= maxOperations;
};
var minimumSize = function (nums, maxOperations) {
  let st = 1,
    end = Math.max(...nums);
  let min_pnatly = Number.MAX_VALUE;
  while (st <= end) {
    let penatly = Math.floor((st + end) / 2);
    if (valid(nums, penatly, maxOperations)) {
      min_pnatly = Math.min(min_pnatly, penatly);
      end = penatly - 1; // because i want to minimize the number
    } else {
      st = penatly + 1;
    }
  }
  return min_pnatly;
};