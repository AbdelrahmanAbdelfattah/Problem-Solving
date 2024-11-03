var calcEquation = function (equations, values, queries) {
  // Step 1: Build the graph
  const graph = {};

  for (let i = 0; i < equations.length; i++) {
    const [A, B] = equations[i];
    const value = values[i];

    if (!graph[A]) graph[A] = {};
    if (!graph[B]) graph[B] = {};

    graph[A][B] = value;
    graph[B][A] = 1 / value;
  }

  // Step 2: Function to perform DFS to find the product of the path
  function dfs(start, end, visited) {
    if (!(start in graph) || !(end in graph)) return -1.0;
    if (start === end) return 1.0;

    visited.add(start);

    for (let neighbor in graph[start]) {
      if (!visited.has(neighbor)) {
        const result = dfs(neighbor, end, visited);
        if (result !== -1.0) {
          return graph[start][neighbor] * result;
        }
      }
    }

    return -1.0;
  }

  // Step 3: Process each query
  const results = [];
  for (const [C, D] of queries) {
    const visited = new Set();
    results.push(dfs(C, D, visited));
  }

  return results;
};
