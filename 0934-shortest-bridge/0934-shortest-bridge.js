var findPos = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) return [i, j];
    }
  }
};

var find_first_island = function (pos, grid) {
  let Island = [];
  let q = [];
  Island.push(pos);
  q.push(pos);
  let visit = new Array(grid.length);
  for (let i = 0; i < grid.length; i++)
    visit[i] = new Array(grid[i].length).fill(0);
  visit[pos[0]][pos[1]] = 1;
  while (q.length != 0) {
    let node = q.shift();
    let r = node[0];
    let c = node[1];
    if (r + 1 < grid.length && grid[r + 1][c] == 1 && !visit[r + 1][c]) {
      Island.push([r + 1, c]);
      visit[r + 1][c] = 1;
      q.push([r + 1, c]);
    }
    if (r - 1 >= 0 && grid[r - 1][c] == 1 && !visit[r - 1][c]) {
      Island.push([r - 1, c]);
      visit[r - 1][c] = 1;
      q.push([r - 1, c]);
    }
    if (c + 1 < grid.length && grid[r][c + 1] == 1 && !visit[r][c + 1]) {
      Island.push([r, c + 1]);
      visit[r][c + 1] = 1;
      q.push([r, c + 1]);
    }
    if (c - 1 >= 0 && grid[r][c - 1] == 1 && !visit[r][c - 1]) {
      Island.push([r, c - 1]);
      visit[r][c - 1] = 1;
      q.push([r, c - 1]);
    }
  }
  return Island;
};

var BFS = function (grid, island) {
  let visit = new Array(grid.length);
  for (let i = 0; i < grid.length; i++)
    visit[i] = new Array(grid[i].length).fill(0);
  let ans = new Array(grid.length);
  for (let i = 0; i < grid.length; i++)
    ans[i] = new Array(grid[i].length).fill(0);
  for (let i = 0; i < island.length; i++) {
    node = island[i];
    visit[node[0]][node[1]] = 1;
  }

  let min = Number.MAX_VALUE;
  while (island.length != 0) {
    let node = island.shift();
    let r = node[0];
    let c = node[1];
    if (r + 1 < grid.length && !visit[r + 1][c]) {
      island.push([r + 1, c]);
      visit[r + 1][c] = 1;
      ans[r + 1][c] = ans[r][c] + 1;
      if (grid[r + 1][c] == 1) min = Math.min(min, ans[r + 1][c]);
    }
    if (r - 1 >= 0 && !visit[r - 1][c]) {
      island.push([r - 1, c]);
      visit[r - 1][c] = 1;
      ans[r - 1][c] = ans[r][c] + 1;
      if (grid[r - 1][c] == 1) min = Math.min(min, ans[r - 1][c]);
    }
    if (c + 1 < grid.length && !visit[r][c + 1]) {
      island.push([r, c + 1]);
      visit[r][c + 1] = 1;
      ans[r][c + 1] = ans[r][c] + 1;
      if (grid[r][c + 1] == 1) min = Math.min(min, ans[r][c + 1]);
    }
    if (c - 1 >= 0 && !visit[r][c - 1]) {
      island.push([r, c - 1]);
      visit[r][c - 1] = 1;
      ans[r][c - 1] = ans[r][c] + 1;
      if (grid[r][c - 1] == 1) min = Math.min(min, ans[r][c - 1]);
    }
  }
  return min - 1;
};

var shortestBridge = function (grid) {
  let pos = findPos(grid);
  let first_island = find_first_island(pos, grid);
  return BFS(grid, first_island);
};