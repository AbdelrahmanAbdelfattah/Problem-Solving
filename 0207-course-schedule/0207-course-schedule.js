var isCyclic = function (adj, vis, finish, node) {
  vis[node] = 1;
  let cyclic = 0;
  for (let i = 0; i < adj[node].length; i++) {
    let neighbor = adj[node][i];
    if (vis[neighbor] === 0) {
      cyclic = cyclic || isCyclic(adj, vis, finish, neighbor);
    } else if (finish[neighbor] === 0) {
      cyclic = 1;
    }
  }
  finish[node] = 1;  // This line should be outside of the loop
  return cyclic;
};

var canFinish = function (numCourses, prerequisites) {
  let graph = new Array(numCourses).fill(0).map(() => []);
  let visit = new Array(numCourses).fill(0);
  let finish = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    graph[prerequisites[i][1]].push(prerequisites[i][0]);
  }

  for (let course = 0; course < numCourses; course++) {
    if (visit[course] === 0) {
      if (isCyclic(graph, visit, finish, course)) return false;
    }
  }
  return true;
};

// console.log(
//   canFinish(2, [
//     [1, 0],
//     [0, 1],
//   ])
// );
