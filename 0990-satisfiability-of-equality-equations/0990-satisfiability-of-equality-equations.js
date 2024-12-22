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

let init = function (n) {
  pars = new Map();
  size = new Map();
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    pars.set(i, i);
    size.set(i, 1);
  }
  return;
};

var equationsPossible = function (equations) {
  init(27);
  for (let i = 0; i < equations.length; i++) {
    let char1 = equations[i][0];
    let char2 = equations[i][3];
    let signal = equations[i][1] + equations[i][2];
    if (signal === "==") {
      char1 = char1.charCodeAt(0);
      char2 = char2.charCodeAt(0);
      conn(char1, char2);
    }
  }

  for (let i = 0; i < equations.length; i++) {
    let char1 = equations[i][0].charCodeAt(0);
    let char2 = equations[i][3].charCodeAt(0);
    let signal = equations[i][1] + equations[i][2];
    if (signal === "!=") {
      if (is_conn(char1, char2)) return false;
    }
  }
  return true;
};
