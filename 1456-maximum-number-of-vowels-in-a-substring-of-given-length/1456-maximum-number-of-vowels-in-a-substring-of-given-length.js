/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let st = 0,
    en = 0,
    count = 0,
    max = 0;
  let res = 0;
  while (st <= en) {
    if (en == s.length) break;

    if (count >= k) {
      let char = s[st];
      if (
        char == "a" ||
        char == "o" ||
        char == "e" ||
        char == "i" ||
        char == "u"
      ) {
        res = Math.max(max, res);
        max--;
      }
      count--;
      st++;
    }

    let char = s[en];
    if (
      char == "a" ||
      char == "o" ||
      char == "e" ||
      char == "i" ||
      char == "u"
    ) {
      max++;
      res = Math.max(max, res);
    }

    count++;
    en++;
  }
  return res;
};