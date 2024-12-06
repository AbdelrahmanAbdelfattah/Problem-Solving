var maxCount = function (banned, n, maxSum) {
  let banned_map = new Map();
  let sum = 0;
  let count = 0;
  for (let i = 0; i < banned.length; i++) {
    banned_map.set(banned[i], 1);
  }
  for (let i = 1; i <= n; i++) {
    if (!banned_map.has(i) && sum + i <= maxSum) {
      sum += i;
      count++;
    }
  }
  return count;
};