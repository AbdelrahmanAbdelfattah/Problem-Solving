/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) return 0;
  else if (s.length == 1 || (s.length == 2 && s[0] == s[1])) return 1;

  let hash = new Map();
  let result = 0;
  let current = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (hash.get(s[j]) == 1) {
        result = Math.max(result, current);
        current = 0;
        hash.clear();
        break;
      } else if (!hash.get(s[j])) {
        hash.set(s[j], 1);
        current++;
        result = Math.max(result, current);
      }
    }
  }
  return result;
};