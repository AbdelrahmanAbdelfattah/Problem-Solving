var BFS = function (i, j, grid, visit) {
  visit[i][j] = 1;
  let q = [];
  q.push([i, j]);

  let m = grid.length - 1;
  let n = grid[i].length - 1;

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
    for (let [dr, dc] of dir) {
      let newR = dr + i,
        newC = dc + j;
      if (
        newR >= 0 &&
        newC >= 0 &&
        newR <= m &&
        newC <= n &&
        !visit[newR][newC] &&
        grid[newR][newC]
      ) {
        q.push([newR, newC]);
        visit[newR][newC] = 1;
        num++;
      }
    }
  }

  return num;
};

var maxAreaOfIsland = function (grid) {
  let visit = new Array(grid.length);
  for (let i = 0; i < visit.length; i++) {
    visit[i] = new Array(grid[0].length).fill(0);
  }

  result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] && !visit[i][j]) {
        result = Math.max(BFS(i, j, grid, visit), result);
      }
    }
  }

  return result;
};