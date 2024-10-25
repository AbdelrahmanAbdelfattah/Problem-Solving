/**
 * @param {number[][]} edges
 * @return {number[]}
 */
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

var findRedundantConnection = function (edges) {
  pars = new Map();
  for (let i = 0; i < edges.length; i++) {
    pars.set(edges[i][0], edges[i][0]);
    pars.set(edges[i][1], edges[i][1]);
  }
  size = new Map();
  let ans = [];
  for (let i = 0; i < edges.length; i++) {
    let [u, v] = edges[i];
    if (is_conn(u, v)) {
      ans.push([u, v]);
    }
    conn(u, v);
  }

  return ans[0];
};