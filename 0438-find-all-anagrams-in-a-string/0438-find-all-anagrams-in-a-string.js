/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let freq_p = new Map();
  let freq_s = new Map();
  for (let i = 0; i < p.length; i++) {
    if(p.length> s.length) 
      return [];
    if (!freq_p.has(p[i])) {
      freq_p.set(p[i], 1);
    } else {
      freq_p.set(p[i], freq_p.get(p[i]) + 1);
    }
  }

  for (let i = 0; i < p.length; i++) {
    if (!freq_s.has(s[i])) {
      freq_s.set(s[i], 1);
    } else {
      freq_s.set(s[i], freq_s.get(s[i]) + 1);
    }
  }

  let l = 0,
    r = p.length - 1;

  let arr = [];

  // s = "cbaebabacd", p = "abc";
  while (l <= r && r < s.length) {
    let notfound = false;
    for (let i = l; i < p.length + l; i++) {
      if (freq_s.get(p[i - l]) != freq_p.get(p[i - l])) {
        notfound = true;
        break;
      }
    }
    if (!notfound) arr.push(l);
    freq_s.set(s[l], freq_s.get(s[l]) - 1);
    if (freq_s.get(s[l]) == 0) freq_s.delete(s[l]);

    l++, r++;

    if (freq_s.has(s[r])) {
      freq_s.set(s[r], freq_s.get(s[r]) + 1);
    } else {
      freq_s.set(s[r], 1);
    }
  }

  return arr;
};