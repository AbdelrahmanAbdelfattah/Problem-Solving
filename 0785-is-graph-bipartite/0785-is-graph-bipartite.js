var dfs = function (node, graph, visit, color) {
  visit[node] = 1;
  for (let i = 0; i < graph[node].length; i++) {
    if (!visit[graph[node][i]]) {
      if (color[node] == 1) color[graph[node][i]] = 2;
      else if (color[node] == 2) color[graph[node][i]] = 1;
      else {
        color[node] = 1;
        color[graph[node][i]] = 2;
      }
      if (!dfs(graph[node][i], graph, visit, color)) return false;
    } else {
      if (color[node] == color[graph[node][i]]) return false;
    }
  }
  return true;
};

var isBipartite = function (graph) {
  let n = graph.length;
  let visit = new Array(n).fill(0);
  let color = new Array(n).fill(0);
  color[0] = 1;
  let ans = true;
  for (let i = 0; i < n; i++) {
    if (!visit[i]) {
      ans &= dfs(i, graph, visit, color);
    }
  }

  console.log(visit);
  console.log(color);
  return ans;
};
