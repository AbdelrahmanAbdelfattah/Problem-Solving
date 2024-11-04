var isCyclic = function (adj, vis, finish, node) {
  vis[node] = 1;
  let cyclic = 0;
  for (let negh = 0; negh < adj[node].length; negh++) {
    let neighbor = adj[node][negh];
    if (vis[neighbor] === 0)
      cyclic = cyclic || isCyclic(adj, vis, finish, neighbor);
    else if (finish[neighbor] === 0) cyclic = 1;
  }
  finish[node] = 1;
  return cyclic;
};

var canFinish = function (numCourses, prerequisites) {
  let graph = new Array(numCourses);
  let visit = new Array(numCourses).fill(0);
  let finish = new Array(numCourses).fill(0);
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < prerequisites.length; i++) {
    graph[prerequisites[i][1]].push(prerequisites[i][0]);
  }

  console.log(graph);

  for (let course = 0; course < numCourses; course++) {
    if (visit[course] === 0) {
      if (isCyclic(graph, visit, finish, course)) return false;
    }
  }
  return true;
};