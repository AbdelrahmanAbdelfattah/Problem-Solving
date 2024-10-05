var updateMatrix = function (mat) {
  let m = mat.length;
  let n = mat[0].length;
  let ans = new Array(m).fill(0).map(() => new Array(n).fill(Infinity));
  let queue = [];

  // Step 1: Add all 0's to the queue and initialize their distances as 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        ans[i][j] = 0;
        queue.push([i, j]);  // Start BFS from all 0's
      }
    }
  }

  let directions = [
    [1, 0], // down
    [-1, 0], // up
    [0, 1], // right
    [0, -1] // left
  ];

  // Step 3: BFS to update the distances
  while (queue.length > 0) {
    let [r, c] = queue.shift();

    for (let [dr, dc] of directions) {
      let newR = r + dr;
      let newC = c + dc;

      if (newR >= 0 && newR < m && newC >= 0 && newC < n) {
        // If the new cell hasn't been visited yet (has a higher value)
        if (ans[newR][newC] > ans[r][c] + 1) {
          ans[newR][newC] = ans[r][c] + 1;
          queue.push([newR, newC]);
        }
      }
    }
  }

  return ans;
};
