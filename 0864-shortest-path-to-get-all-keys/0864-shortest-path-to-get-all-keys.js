var shortestPathAllKeys = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let start = null;
  let totalKeys = 0;

  // Find the start position and the number of keys
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "@") {
        start = [i, j];
      } else if (grid[i][j] >= "a" && grid[i][j] <= "z") {
        totalKeys |= 1 << (grid[i][j].charCodeAt(0) - "a".charCodeAt(0)); // Count how many keys there are
      }
    }
  }

  // Directions for BFS
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // BFS queue and visited set
  let q = [[start[0], start[1], 0, 0]]; // [row, col, steps, collected keys (bitmask)]
  let visited = new Set();
  visited.add(`${start[0]}-${start[1]}-0`); // Add the start position and initial key state to visited

  // Perform BFS
  while (q.length > 0) {
    let [r, c, steps, keys] = q.shift();

    // If we have collected all keys, return the number of steps
    if (keys === totalKeys) return steps;

    // Explore neighbors
    for (let [dr, dc] of directions) {
      let nr = r + dr;
      let nc = c + dc;

      if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] !== "#") {
        let cell = grid[nr][nc];
        let newKeys = keys;

        // If it's a key, add it to our key collection (bitmask)
        if (cell >= "a" && cell <= "z") {
          newKeys |= 1 << (cell.charCodeAt(0) - "a".charCodeAt(0));
        }

        // If it's a lock, check if we have the corresponding key
        if (cell >= "A" && cell <= "Z") {
          if (!(keys & (1 << (cell.charCodeAt(0) - "A".charCodeAt(0))))) {
            continue; // Skip if we don't have the corresponding key
          }
        }

        // If we haven't visited this position with the current key set, add it to the queue
        if (!visited.has(`${nr}-${nc}-${newKeys}`)) {
          visited.add(`${nr}-${nc}-${newKeys}`);
          q.push([nr, nc, steps + 1, newKeys]);
        }
      }
    }
  }

  return -1; // Return -1 if we cannot collect all keys
};

let grid = ["@...a", ".###A", "b.BCc"];

console.log(shortestPathAllKeys(grid));
