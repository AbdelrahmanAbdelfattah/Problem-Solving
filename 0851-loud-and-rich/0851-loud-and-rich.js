var dfs = function (node, graph, quiet, visit, min) {
  // Compare quietness values and update min to the quieter node's index
  if (quiet[node] < quiet[min]) {
    min = node; // Update min to be the quieter node
  }
  
  visit[node] = 1; // Mark the node as visited

  // Traverse through neighbors
  for (let i = 0; i < graph[node].length; i++) {
    let neighbor = graph[node][i];
    if (!visit[neighbor]) {
      // Recursive DFS call to explore the neighbor and find the quietest node
      let new_min = dfs(neighbor, graph, quiet, visit, min);
      if (quiet[new_min] < quiet[min]) {
        min = new_min; // Update the minimum to the quieter neighbor's index
      }
    }
  }

  return min; // Return the node index with the minimum quiet value
};

var loudAndRich = function (richer, quiet) {
  // Initialize the graph as an adjacency list
  let graph = new Array(quiet.length);
  for (let i = 0; i < quiet.length; i++) {
    graph[i] = [];
  }

  // Build the graph from the richer array
  for (let i = 0; i < richer.length; i++) {
    let low = richer[i][1];
    let high = richer[i][0];
    graph[low].push(high); // Push high (richer) person to low's adjacency list
  }

  // Initialize the result array and the visit array
  let ans = new Array(quiet.length).fill(0);
  let visit = new Array(quiet.length).fill(0);

  // Perform DFS for each node
  for (let i = 0; i < quiet.length; i++) {
    visit.fill(0); // Reset visit array for each DFS call
    let min = dfs(i, graph, quiet, visit, i); // Start DFS from each node
    ans[i] = min; // Store the node index (quietest person reachable)
  }

  return ans; // Return the final result array of node indices
};

let richer = [
    [1, 0],
    [2, 1],
    [3, 1],
    [3, 7],
    [4, 3],
    [5, 3],
    [6, 3],
  ],
  quiet = [3, 2, 5, 4, 6, 1, 7, 0];

console.log(loudAndRich(richer, quiet));
