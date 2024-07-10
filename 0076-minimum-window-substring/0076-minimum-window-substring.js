var minWindow = function (s, t) {
  let hash_t = new Map();
  for (let i = 0; i < t.length; i++) {
    if (!hash_t.has(t[i])) {
      hash_t.set(t[i], 1);
    } else {
      let cnt = hash_t.get(t[i]);
      hash_t.set(t[i], ++cnt);
    }
  }
  let l = 0,
    r = 0;

  let minstring = "";
  let minlength = Number.MAX_VALUE;
  let count = hash_t.size;

  while (r < s.length) {
    let rchar = s[r];
    if (hash_t.has(rchar)) {
      hash_t.set(rchar, hash_t.get(rchar) - 1);
      if (hash_t.get(rchar) === 0) count--;
    }
    r++;
    while (count === 0) {
      if (r - l < minlength) {
        minlength = r - l;
        minstring = s.slice(l, r);
      }
      let lchar = s[l];
      if (hash_t.has(lchar)) {
        hash_t.set(lchar, hash_t.get(lchar) + 1);
        if (hash_t.get(lchar) > 0) count++;
      }
      l++;
    }
  }
  return minstring;
};