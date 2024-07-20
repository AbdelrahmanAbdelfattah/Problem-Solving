/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let l = 0,
    r = 0;
  let map = new Map();
  let maxfreq = Number.MIN_VALUE;
  let res = Number.MIN_VALUE;

  while (l <= r && r < s.length) {
    if (!map.has(s[r])) {
      map.set(s[r], 1);
    } else {
      map.set(s[r], map.get(s[r]) + 1);
    }

    map.forEach((value, key) => {
      maxfreq = Math.max(maxfreq, value);
    });

    if (r - l + 1 - maxfreq > k) {
      map.set(s[l], map.get(s[l]) - 1);

      l++;
    }
    res = Math.max(res, r - l + 1);
    r++;
  }
  console.log(map);

  return res;
};
