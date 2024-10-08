var BFS = function (i, j, grid, visit) {
  visit[i][j] = 1;
  let q = [];
  q.push([i, j]);

  let m = grid.length - 1;
  let n = grid[i].length - 1;

  let flag = true;
  let num = 0;
  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  while (q.length > 0) {
    let node = q.shift();
    num++;
    (i = node[0]), (j = node[1]);
    if (i == m || i == 0 || j == 0 || j == n) flag = false;
    for (let [dr, dc] of dir) {
      let newR = dr + i,
        newC = dc + j;
      if (
        newR >= 0 &&
        newC >= 0 &&
        newR <= m &&
        newC <= n &&
        !visit[newR][newC] &&
        !grid[newR][newC]
      ) {
        q.push([newR, newC]);
        visit[newR][newC] = 1;
      }
    }
  }

  if (flag) return 1;
  return 0;
};

var closedIsland = function (grid) {
  let visit = new Array(grid.length);
  for (let i = 0; i < visit.length; i++) {
    visit[i] = new Array(grid[0].length).fill(0);
  }

  result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!grid[i][j] && !visit[i][j]) {
        result += BFS(i, j, grid, visit);
      }
    }
  }

  return result;
};