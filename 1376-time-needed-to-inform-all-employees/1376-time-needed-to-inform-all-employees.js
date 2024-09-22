var BFS = function (headID, graph, informTime) {
  let q = [[headID, 0]]; // Queue stores [employee, time_taken_to_inform]
  let maxTime = 0;

  while (q.length !== 0) {
    let [node, currTime] = q.shift(); // Get the current employee and the time it took to inform them
    maxTime = Math.max(maxTime, currTime); // Track the maximum time taken

    // Inform all subordinates
    for (let i = 0; i < graph[node].length; i++) {
      let neighbor = graph[node][i]; // The subordinate
      q.push([neighbor, currTime + informTime[node]]); // Add the subordinate and the time to inform them
    }
  }

  return maxTime;
};
var numOfMinutes = function (n, headID, manager, informTime) {
  let graph = new Array(n).fill(null).map(() => []); // Create the graph (adjacency list)

  // Build the graph representing the manager-employee hierarchy
  for (let i = 0; i < manager.length; i++) {
    let boss = manager[i];
    if (boss !== -1) {
      graph[boss].push(i); // Boss manages employee i
    }
  }

  return BFS(headID, graph, informTime); // Call BFS to calculate the total time
};

// Test case
let n = 15,
  headID = 0,
  manager = [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
  informTime = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];

console.log(numOfMinutes(n, headID, manager, informTime)); // Output should be 3
