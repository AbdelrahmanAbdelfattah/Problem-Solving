var valid = function (r, c, row, col, maze, visited) {
  if (
    r <= row &&
    c <= col &&
    r >= 0 &&
    c >= 0 &&
    maze[r][c] != "+" &&
    !visited[r][c]
  )
    return true;
  return false;
};

var BFS = function (maze, entrance) {
  let min = Number.MAX_VALUE;
  let q = [];
  q.push(entrance);
  let ans = new Array(maze.length);
  let visited = new Array(maze.length);
  let row = maze.length - 1;
  let col = maze[0].length - 1;
  for (let i = 0; i < maze.length; i++) {
    visited[i] = new Array(maze[0].length).fill(0);
    ans[i] = new Array(maze[0].length).fill(0);
  }
  visited[entrance[0]][entrance[1]] = 1;

  while (q.length != 0) {
    let node = q.shift();
    let r = node[0];
    let c = node[1];
    if (valid(r + 1, c, row, col, maze, visited)) {
      q.push([r + 1, c]);
      ans[r + 1][c] = ans[r][c] + 1;
      visited[r + 1][c] = 1;
      if (r + 1 == row || c == 0 || c == col)
        min = Math.min(min, ans[r + 1][c]);
    }
    if (valid(r, c + 1, row, col, maze, visited)) {
      q.push([r, c + 1]);
      ans[r][c + 1] = ans[r][c] + 1;
      visited[r][c + 1] = 1;
      if (c + 1 == col || r == row || r == 0)
        min = Math.min(min, ans[r][c + 1]);
    }
    if (valid(r - 1, c, row, col, maze, visited)) {
      q.push([r - 1, c]);
      ans[r - 1][c] = ans[r][c] + 1;
      visited[r - 1][c] = 1;
      if (r - 1 == 0 || c == 0 || c == col) min = Math.min(min, ans[r - 1][c]);
    }
    if (valid(r, c - 1, row, col, maze, visited)) {
      q.push([r, c - 1]);
      ans[r][c - 1] = ans[r][c] + 1;
      visited[r][c - 1] = 1;
      if (c - 1 == 0 || r == row || r == 0) min = Math.min(min, ans[r][c - 1]);
    }
  }

  if (min == Number.MAX_VALUE) return -1;
  return min;
};
var nearestExit = function (maze, entrance) {
  return BFS(maze, entrance);
};
let maze = [
    [".", ".", ".", ".", ".", "+", ".", ".", "."],
    [".", "+", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "+", ".", "+", ".", "+", ".", "+"],
    [".", ".", ".", ".", "+", ".", ".", ".", "."],
    [".", ".", ".", ".", "+", "+", ".", ".", "."],
    ["+", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "+", ".", ".", ".", ".", "."],
    [".", ".", ".", "+", ".", ".", ".", ".", "+"],
    ["+", ".", ".", "+", ".", "+", "+", ".", "."],
  ],
  entrance = [8, 4];

console.log(nearestExit(maze, entrance));
