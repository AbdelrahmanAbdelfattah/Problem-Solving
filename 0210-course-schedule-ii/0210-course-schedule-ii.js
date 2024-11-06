var isCyclicMap = function (adj, vis, finish, node) {
  vis.set(node, 1);
  let cyclic = 0;
  let neighpors = adj.get(node) || [];
  for (let i = 0; i < neighpors.length; i++) {
    let neighbor = neighpors[i];
    if (!vis.has(neighbor))
      cyclic = cyclic || isCyclicMap(adj, vis, finish, neighbor);
    else if (finish.get(neighbor) === 0) cyclic = 1;
  }
  finish.set(node, 1);
  return cyclic;
};

var dfs = function (node, graph, visited, courses) {
  visited.set(node, 1);
  let neighpors = graph.get(node) || [];
  for (let i = 0; i < neighpors.length; i++) {
    let neighpor = neighpors[i];

    if (!visited.has(neighpor)) {
      dfs(neighpor, graph, visited, courses);
    }
  }
  courses.push(node);
};

var findOrder = function (numCourses, prerequisites) {
  let graph = new Map();
  let visited = new Map();
  let courses = [];
  let finish = new Map();

  for (let i = 0; i < numCourses; i++) {
    finish.set(i, 0);
  }

  for (let i = 0; i < prerequisites.length; i++) {
    finish.set(i, 0);
    let [c1, c2] = prerequisites[i];
    if (!graph.has(c1)) {
      graph.set(c1, [c2]);
    } else {
      graph.get(c1).push(c2);
    }
  }

  for (let i = 0; i < numCourses; i++) {
    if (isCyclicMap(graph, visited, finish, i)) {
      return [];
    }
  }

  visited.clear();

  for (let i = 0; i < numCourses; i++) {
    if (!visited.has(i)) {
      dfs(i, graph, visited, courses);
    }
  }
  return courses;
};
