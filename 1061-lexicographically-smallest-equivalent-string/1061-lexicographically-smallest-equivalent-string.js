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

let init_DSU = function (n) {
  pars = new Map();
  size = new Map();
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    pars.set(i, i);
    size.set(i, 1);
  }
};

var smallestEquivalentString = function (s1, s2, baseStr) {
  init_DSU(27);
  for (let i = 0; i < s1.length; i++) {
    let u = s1[i].charCodeAt(0);
    let v = s2[i].charCodeAt(0);
    conn(u, v);
  }

  let res = "";
  for (let i = 0; i < baseStr.length; i++) {
    let c = baseStr[i].charCodeAt(0);
    for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
      if (is_conn(i, c)) {
        res += String.fromCharCode(i);
        break;
      }
    }
  }
  return res;
};