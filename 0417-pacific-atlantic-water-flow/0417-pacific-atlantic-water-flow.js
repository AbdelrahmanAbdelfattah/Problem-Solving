var BFS = function (i, j, grid) {
  let visit = new Array(grid.length);
  for (let i = 0; i < visit.length; i++) {
    visit[i] = new Array(grid[0].length).fill(0);
  }

  visit[i][j] = 1;
  let q = [];
  q.push([i, j]);

  let m = grid.length - 1;
  let n = grid[i].length - 1;

  let pacific = false;
  let atlantic = false;

  let num = 1;
  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  while (q.length > 0) {
    let node = q.shift();

    (i = node[0]), (j = node[1]);

    if (i == 0 || j == 0) pacific = true;
    if (i == m || j == n) atlantic = true;
    if (i == 0 && j == n) (pacific = true), (atlantic = true);
    if (i == m && j == 0) (pacific = true), (atlantic = true);

    for (let [dr, dc] of dir) {
      let newR = dr + i,
        newC = dc + j;
      if (
        newR >= 0 &&
        newC >= 0 &&
        newR <= m &&
        newC <= n &&
        !visit[newR][newC] &&
        grid[newR][newC] <= grid[i][j]
      ) {
        q.push([newR, newC]);
        visit[newR][newC] = 1;
      }
    }
  }

  if (pacific && atlantic) return true;
  return false;
};

var pacificAtlantic = function (grid) {
  let result = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (BFS(i, j, grid)) result.push([i, j]);
    }
  }

  return result;
};