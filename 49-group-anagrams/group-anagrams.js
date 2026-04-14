/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let new_str = strs[i].split("").sort().join("");
    if (!map.has(new_str)) {
      map.set(new_str, [strs[i]]);
    } else {
      map.get(new_str).push(strs[i]);
    }
  }

  return Array.from(map.values());
};