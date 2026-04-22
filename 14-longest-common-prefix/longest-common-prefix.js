var longestCommonPrefix = function (strs) {
  strs.sort();
  let prefix = "";
  let first = strs[0];
  let last = strs[strs.length - 1];
  let minimum_length = Math.min(first.length, last.length);
  for (let i = 0; i < minimum_length; i++) {
    if (first[i] === last[i]) prefix += first[i];
    else break;
  }
  return prefix;
};