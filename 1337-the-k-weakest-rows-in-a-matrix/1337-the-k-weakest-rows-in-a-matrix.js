/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */var kWeakestRows = function (mat, k) {
  let ans = []
  for (let i = 0; i < mat.length; i++) {
    let n = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j]) n++;
    }
    ans.push ( [n, i] );
  }

  ans.sort(function(a,b){return a[0]-b[0]});
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr[i] = ans[i][1];
  }
  return arr;
};
