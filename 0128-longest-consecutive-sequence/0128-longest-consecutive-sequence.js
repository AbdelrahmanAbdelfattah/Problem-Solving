var pars;

var size;

var find_par = function (u) {
  let par = pars.get(u);
  if (par == u) return u;
  pars.set(u, find_par(par)); // Corrected to update u's parent
  return pars.get(u); // Return the updated parent of u
};

var is_conn = function (u, v) {
  let par_u = find_par(u);
  let par_v = find_par(v);

  return par_u == par_v;
};

var conn = function (u, v) {
  if (is_conn(u, v)) return size.get(find_par(u));
  u = find_par(u);
  v = find_par(v);
  if (size.get(u) < size.get(v)) {
    pars.set(u, v);
    size.set(v, size.get(v) + size.get(u));
    return size.get(v);
  } else {
    pars.set(v, u);
    size.set(u, size.get(u) + size.get(v));
    return size.get(u);
  }
};

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0; // Edge case for empty array

  pars = new Map();
  size = new Map();

  let numbers = new Set(nums);
  // Initialize each number as its own parent and size as 1
  for (let num of nums) {
    pars.set(num, num);
    size.set(num, 1);
  }

  for (let i = 0; i < nums.length; i++) {
    pars.set(nums[i], nums[i]);
    size.set(nums[i], 1);
  }

  let max = 1; // At least one number will have a consecutive sequence of length 1

  for (let num of nums) {
    let before = num - 1;
    let after = num + 1;

    // If there is a number before the current one, union them
    if (numbers.has(before)) {
      max = Math.max(max, conn(num, before));
    }

    // If there is a number after the current one, union them
    if (numbers.has(after)) {
      max = Math.max(max, conn(num, after));
    }
  }

  return max;
};

let nums = [100, 4, 200, 1, 3, 2];

console.log(longestConsecutive(nums));
